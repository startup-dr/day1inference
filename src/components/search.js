// Site-wide search component
// Usage: Call initSearch(articleIndex) with the article data

export function initSearch(articleIndex) {
    const searchInput = document.getElementById('site-search');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) {
        console.warn('Search elements not found');
        return;
    }

    // Function to extract context around matched text
    function getMatchContext(text, query, contextLength = 80) {
        const lowerText = text.toLowerCase();
        const lowerQuery = query.toLowerCase();
        const index = lowerText.indexOf(lowerQuery);
        
        if (index === -1) return null;
        
        // Find sentence boundaries around the match
        let start = Math.max(0, index - contextLength);
        let end = Math.min(text.length, index + query.length + contextLength);
        
        // Try to start at a word boundary
        if (start > 0) {
            const spaceIndex = text.indexOf(' ', start);
            if (spaceIndex !== -1 && spaceIndex < index) {
                start = spaceIndex + 1;
            }
        }
        
        // Try to end at a word boundary
        if (end < text.length) {
            const spaceIndex = text.lastIndexOf(' ', end);
            if (spaceIndex !== -1 && spaceIndex > index + query.length) {
                end = spaceIndex;
            }
        }
        
        const excerpt = text.substring(start, end);
        const excerptLower = excerpt.toLowerCase();
        const matchStart = excerptLower.indexOf(lowerQuery);
        
        if (matchStart === -1) return null;
        
        const before = excerpt.substring(0, matchStart);
        const match = excerpt.substring(matchStart, matchStart + query.length);
        const after = excerpt.substring(matchStart + query.length);
        
        return {
            before: (start > 0 ? '...' : '') + before,
            match: match,
            after: after + (end < text.length ? '...' : '')
        };
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
        }
        
        const results = articleIndex.filter(article => {
            return article.title.toLowerCase().includes(query) ||
                   article.description.toLowerCase().includes(query) ||
                   article.category.toLowerCase().includes(query) ||
                   article.content.toLowerCase().includes(query);
        });
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item no-results">No articles found matching "' + query + '"</div>';
            searchResults.style.display = 'block';
            return;
        }
        
        searchResults.innerHTML = results.slice(0, 5).map(article => {
            // Check if query matches in title or description first
            const titleMatch = article.title.toLowerCase().includes(query);
            const descMatch = article.description.toLowerCase().includes(query);
            
            let contextHtml = '';
            
            // If not in title/description, show content match
            if (!titleMatch && !descMatch && article.content) {
                const context = getMatchContext(article.content, query);
                if (context) {
                    contextHtml = `
                        <div class="search-result-context">
                            ${context.before}<mark>${context.match}</mark>${context.after}
                        </div>
                    `;
                }
            }
            
            return `
                <a href="${article.url}" class="search-result-item">
                    <div class="search-result-category">${article.category}</div>
                    <div class="search-result-title">${article.title}</div>
                    <div class="search-result-description">${article.description}</div>
                    ${contextHtml}
                </a>
            `;
        }).join('');
        
        if (results.length > 5) {
            searchResults.innerHTML += '<div class="search-result-item search-more">+ ' + (results.length - 5) + ' more results. <a href="/timeline.html">View all content</a></div>';
        }
        
        searchResults.style.display = 'block';
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });

    // Reopen results when clicking back in search
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length >= 2 && searchResults.innerHTML) {
            searchResults.style.display = 'block';
        }
    });
}
