const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DATA_FILE = path.join(__dirname, '..', 'analytics', 'traffic-data.json');

function gh(endpoint) {
  const json = execSync(`gh api ${endpoint}`, { encoding: 'utf-8' });
  return JSON.parse(json);
}

function loadExistingData() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch {
    return { views: {}, clones: {}, paths: [], referrers: [] };
  }
}

function mergeTimestamped(existing, fresh) {
  const merged = { ...existing };
  for (const entry of fresh) {
    merged[entry.timestamp] = { count: entry.count, uniques: entry.uniques };
  }
  return merged;
}

const repo = process.env.GITHUB_REPOSITORY || execSync('gh repo view --json nameWithOwner -q .nameWithOwner', { encoding: 'utf-8' }).trim();
console.log(`Collecting traffic data for ${repo}...`);

const data = loadExistingData();

const views = gh(`/repos/${repo}/traffic/views`);
const clones = gh(`/repos/${repo}/traffic/clones`);
const paths = gh(`/repos/${repo}/traffic/popular/paths`);
const referrers = gh(`/repos/${repo}/traffic/popular/referrers`);

data.views = mergeTimestamped(data.views, views.views || []);
data.clones = mergeTimestamped(data.clones, clones.clones || []);

const today = new Date().toISOString().split('T')[0];

if (paths.length > 0) {
  data.paths = (data.paths || []).filter(s => s.date !== today);
  data.paths.push({ date: today, data: paths });
}

if (referrers.length > 0) {
  data.referrers = (data.referrers || []).filter(s => s.date !== today);
  data.referrers.push({ date: today, data: referrers });
}

data.lastUpdated = new Date().toISOString();

fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + '\n');

const viewDays = Object.keys(data.views).length;
const cloneDays = Object.keys(data.clones).length;
console.log(`Saved: ${viewDays} days of views, ${cloneDays} days of clones, ${data.paths.length} path snapshots, ${data.referrers.length} referrer snapshots`);
