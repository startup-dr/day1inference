/**
 * Build-time BibTeX parser and citation processor.
 *
 * Replaces Distill.pub's client-side citation handling with a webpack
 * build-step so pages ship with fully rendered citations and bibliography.
 *
 * Exports:
 *   parseBibtex(bibtexContent)          -> { key: entryObject, ... }
 *   processCitations(html, bibtexContent) -> { html, bibliographyHtml }
 */

'use strict';

// ---------------------------------------------------------------------------
// BibTeX parser
// ---------------------------------------------------------------------------

/**
 * Parse a BibTeX string into a map of citation key -> entry object.
 *
 * Supported entry types: @article, @book, @inproceedings, @online, @misc
 * Supported fields: title, author, year, url, journal, booktitle,
 *   howpublished, publisher, volume, number, pages
 *
 * @param {string} bibtexContent - Raw BibTeX file content
 * @returns {Object.<string, Object>} Map of citation keys to entry objects
 */
function parseBibtex(bibtexContent) {
  if (!bibtexContent || typeof bibtexContent !== 'string') {
    return {};
  }

  const entries = {};

  // Match each @type{key, ... } block.
  // We need a brace-depth-aware approach because field values can contain
  // nested braces (e.g. LaTeX accents like \'{e}).
  const entryStartRegex = /@(\w+)\s*\{/g;
  let match;

  while ((match = entryStartRegex.exec(bibtexContent)) !== null) {
    const entryType = match[1].toLowerCase();

    // Skip non-entry directives like @comment, @preamble, @string
    const supportedTypes = ['article', 'book', 'inproceedings', 'online', 'misc'];
    if (!supportedTypes.includes(entryType)) {
      continue;
    }

    // Find the full extent of this entry by counting braces.
    const startIdx = match.index + match[0].length; // right after the opening {
    let depth = 1;
    let pos = startIdx;
    while (pos < bibtexContent.length && depth > 0) {
      if (bibtexContent[pos] === '{') depth++;
      else if (bibtexContent[pos] === '}') depth--;
      pos++;
    }

    // The body is everything between the opening { and the matching }.
    const body = bibtexContent.substring(startIdx, pos - 1);

    // The citation key is the text before the first comma.
    const commaIdx = body.indexOf(',');
    if (commaIdx === -1) continue;

    const citationKey = body.substring(0, commaIdx).trim();
    const fieldsStr = body.substring(commaIdx + 1);

    const entry = { type: entryType, key: citationKey };

    // Parse individual fields.  Fields look like:
    //   fieldname = {value with {nested} braces},
    //   fieldname = "value",
    //   fieldname = 2024,
    const fieldRegex = /(\w+)\s*=\s*/g;
    let fieldMatch;

    while ((fieldMatch = fieldRegex.exec(fieldsStr)) !== null) {
      const fieldName = fieldMatch[1].toLowerCase();
      let valueStart = fieldMatch.index + fieldMatch[0].length;

      let value;
      if (fieldsStr[valueStart] === '{') {
        // Brace-delimited value: count braces to find the end.
        let fDepth = 1;
        let fPos = valueStart + 1;
        while (fPos < fieldsStr.length && fDepth > 0) {
          if (fieldsStr[fPos] === '{') fDepth++;
          else if (fieldsStr[fPos] === '}') fDepth--;
          fPos++;
        }
        value = fieldsStr.substring(valueStart + 1, fPos - 1);
      } else if (fieldsStr[valueStart] === '"') {
        // Quote-delimited value.
        const closeQuote = fieldsStr.indexOf('"', valueStart + 1);
        if (closeQuote === -1) continue;
        value = fieldsStr.substring(valueStart + 1, closeQuote);
      } else {
        // Bare value (typically a number like year = 2024).
        const bareMatch = fieldsStr.substring(valueStart).match(/^([^\s,}]+)/);
        if (!bareMatch) continue;
        value = bareMatch[1];
      }

      // Clean up the value: collapse whitespace, strip outer braces, handle
      // LaTeX accent commands.
      value = value.replace(/\s+/g, ' ').trim();
      value = cleanLatex(value);

      entry[fieldName] = value;
    }

    entries[citationKey] = entry;
  }

  return entries;
}

/**
 * Minimal LaTeX-to-text conversion for common constructs found in BibTeX.
 */
function cleanLatex(str) {
  // \'{e} -> e  (accent commands with braces)
  str = str.replace(/\\['"`^~=.uvHtcdbr]\{(\w)\}/g, '$1');
  // \'{e} without braces:  \'e -> e
  str = str.replace(/\\['"`^~=.uvHtcdbr](\w)/g, '$1');
  // Remove remaining single-character LaTeX commands like \&
  str = str.replace(/\\([&%$#_{}])/g, '$1');
  // Strip stray braces that wrapped values
  str = str.replace(/^\{|\}$/g, '');
  return str;
}

// ---------------------------------------------------------------------------
// Author formatting
// ---------------------------------------------------------------------------

/**
 * Parse a BibTeX author string into a readable list.
 *
 * Handles:
 *   "Last, First"           -> "First Last"
 *   "First Last"            -> "First Last"
 *   Multiple authors joined by " and "
 *   "and others" / "others" -> "et al."
 *
 * @param {string} authorStr - Raw BibTeX author field
 * @returns {string} Formatted author string like "A, B, and C"
 */
function formatAuthors(authorStr) {
  if (!authorStr) return '';

  // Split on " and " (case-insensitive, but BibTeX typically uses lowercase).
  const parts = authorStr.split(/\s+and\s+/i);

  const names = [];
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    if (trimmed.toLowerCase() === 'others') {
      names.push('et al.');
      continue;
    }

    if (trimmed.includes(',')) {
      // "Last, First" or "Last, First Middle"
      const [last, ...rest] = trimmed.split(',').map(s => s.trim());
      const first = rest.join(' ').trim();
      names.push(first ? `${first} ${last}` : last);
    } else {
      // "First Last" — already in display order.
      names.push(trimmed);
    }
  }

  if (names.length === 0) return '';
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1];
}

// ---------------------------------------------------------------------------
// Bibliography entry formatting
// ---------------------------------------------------------------------------

/**
 * Produce a human-readable HTML string for a single bibliography entry.
 *
 * Format varies by entry type:
 *   article:        Authors. "Title." Journal, vol(num), pages, year.
 *   book:           Authors. Title. Publisher, year.
 *   inproceedings:  Authors. "Title." In Booktitle, year.
 *   online:         Authors. "Title." URL, year.
 *   misc:           Authors. "Title." Howpublished, year.
 */
function formatEntry(entry) {
  const authors = formatAuthors(entry.author);
  const title = entry.title || 'Untitled';
  const year = entry.year || '';

  let venue = '';

  switch (entry.type) {
    case 'article': {
      const parts = [];
      if (entry.journal) parts.push(entry.journal);
      if (entry.volume) {
        let vol = entry.volume;
        if (entry.number) vol += `(${entry.number})`;
        parts.push(vol);
      }
      if (entry.pages) parts.push(entry.pages);
      venue = parts.join(', ');
      break;
    }
    case 'book': {
      // Books: title is italicized, not quoted.
      const bookParts = [];
      if (entry.publisher) bookParts.push(entry.publisher);
      if (year) bookParts.push(year);
      const bookVenue = bookParts.join(', ');
      const titleHtml = entry.url
        ? `<a href="${escapeAttr(entry.url)}" target="_blank"><em>${escapeHtml(title)}</em></a>`
        : `<em>${escapeHtml(title)}</em>`;
      const line = authors
        ? `${escapeHtml(authors)}. ${titleHtml}.${bookVenue ? ' ' + escapeHtml(bookVenue) + '.' : ''}`
        : `${titleHtml}.${bookVenue ? ' ' + escapeHtml(bookVenue) + '.' : ''}`;
      return line;
    }
    case 'inproceedings': {
      if (entry.booktitle) venue = entry.booktitle;
      break;
    }
    case 'online': {
      // For online entries, show URL as venue if no other venue is given.
      if (entry.howpublished) venue = entry.howpublished;
      break;
    }
    case 'misc': {
      if (entry.howpublished) venue = entry.howpublished;
      else if (entry.booktitle) venue = entry.booktitle;
      break;
    }
  }

  // Default formatting for non-book entries.
  const titleHtml = entry.url
    ? `<a href="${escapeAttr(entry.url)}" target="_blank">"${escapeHtml(title)}"</a>`
    : `"${escapeHtml(title)}"`;

  const lineParts = [];
  if (authors) lineParts.push(escapeHtml(authors));

  lineParts.push(titleHtml);

  const venueParts = [];
  if (venue) venueParts.push(escapeHtml(venue));
  if (year) venueParts.push(year);
  const venueStr = venueParts.join(', ');
  if (venueStr) lineParts.push(venueStr);

  // Join with ". " between author block and title, and ", " between title and venue.
  // Actually, reconstruct manually for better punctuation.
  let line = '';
  if (authors) {
    line += escapeHtml(authors) + '. ';
  }
  line += titleHtml;
  if (venueStr) {
    line += ' ' + venueStr + '.';
  } else {
    line += '.';
  }

  return line;
}

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------

/**
 * Produce a plain-text tooltip string for a citation hover.
 */
function formatTooltip(entry) {
  const authors = formatAuthors(entry.author);
  const title = entry.title || '';
  const year = entry.year || '';
  const venue = entry.journal || entry.booktitle || entry.publisher || entry.howpublished || '';
  const parts = [];
  if (authors) parts.push(authors);
  if (title) parts.push(`"${title}"`);
  if (venue && year) parts.push(`${venue}, ${year}`);
  else if (venue) parts.push(venue);
  else if (year) parts.push(year);
  return parts.join('. ');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ---------------------------------------------------------------------------
// Main processor
// ---------------------------------------------------------------------------

/**
 * Process an HTML string: replace <d-cite key="..."></d-cite> tags with
 * numbered superscript links, and produce a formatted bibliography section.
 *
 * Citation numbers are assigned in order of first appearance in the HTML.
 *
 * If bibtexContent is falsy, all d-cite tags are stripped and an empty
 * bibliographyHtml is returned.
 *
 * @param {string} html - HTML string potentially containing d-cite tags
 * @param {string} [bibtexContent] - Raw BibTeX file content
 * @returns {{ html: string, bibliographyHtml: string }}
 */
function processCitations(html, bibtexContent) {
  if (!html || typeof html !== 'string') {
    return { html: html || '', bibliographyHtml: '' };
  }

  // If no BibTeX provided, strip d-cite tags and return.
  if (!bibtexContent) {
    const stripped = html.replace(/<d-cite\s+key="[^"]*"\s*><\/d-cite>/g, '');
    return { html: stripped, bibliographyHtml: '' };
  }

  const entries = parseBibtex(bibtexContent);

  // First pass: discover all cited keys in order of appearance and assign numbers.
  const citedKeys = []; // ordered, unique
  const keyToNumber = {};

  const dCiteRegex = /<d-cite\s+key="([^"]*)"\s*><\/d-cite>/g;
  let citeMatch;
  while ((citeMatch = dCiteRegex.exec(html)) !== null) {
    const key = citeMatch[1];
    if (!(key in keyToNumber)) {
      citedKeys.push(key);
      keyToNumber[key] = citedKeys.length; // 1-based
    }
  }

  // Second pass: replace d-cite tags with numbered links.
  const processedHtml = html.replace(dCiteRegex, (fullMatch, key) => {
    const num = keyToNumber[key];
    if (num === undefined) return '';
    const entry = entries[key];
    const tooltip = entry ? formatTooltip(entry) : key;
    return `<a href="#bib-${key}" class="citation-ref" data-tooltip="${escapeAttr(tooltip)}">[${num}]</a>`;
  });

  // Build bibliography HTML.
  let bibItems = '';
  for (const key of citedKeys) {
    const entry = entries[key];
    const num = keyToNumber[key];
    if (!entry) {
      // Referenced key not found in BibTeX — produce a placeholder.
      bibItems += `<li id="bib-${escapeAttr(key)}"><span class="bib-number">[${num}]</span> <em>Unknown reference: ${escapeHtml(key)}</em></li>\n`;
      continue;
    }
    const formatted = formatEntry(entry);
    bibItems += `<li id="bib-${escapeAttr(key)}"><span class="bib-number">[${num}]</span> ${formatted}</li>\n`;
  }

  const bibliographyHtml = citedKeys.length > 0
    ? `<ul class="bibliography-list">\n${bibItems}</ul>`
    : '';

  return { html: processedHtml, bibliographyHtml };
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

module.exports = {
  parseBibtex,
  formatAuthors,
  formatEntry,
  processCitations,
};
