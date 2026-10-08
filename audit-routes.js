const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('./src');
const linkSet = new Set();
// match href="/..." or to="/..." or href={`/...`}
const regexes = [
  /(?:href|to)=["'](\/[a-zA-Z0-9_\-\/]+)["']/g,
  /(?:href|to)=\{[`"'](\/[a-zA-Z0-9_\-\/]+)[`"']\}/g,
  /btnLink:\s*["'](\/[a-zA-Z0-9_\-\/]+)["']/g,
  /href:\s*["'](\/[a-zA-Z0-9_\-\/]+)["']/g,
  /link:\s*["'](\/[a-zA-Z0-9_\-\/]+)["']/g,
  /path:\s*["'](\/[a-zA-Z0-9_\-\/]+)["']/g,
  /url:\s*`?\${baseUrl}(\/[a-zA-Z0-9_\-\/]+)`?/g
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  regexes.forEach(regex => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      let url = match[1].split('#')[0].split('?')[0];
      if (url.endsWith('/') && url.length > 1) url = url.slice(0, -1);
      if (url && !url.startsWith('/api') && url !== '/' && !url.includes('.')) {
        linkSet.add(url);
      }
    }
  });
});

console.log('=== CHECKING ROUTE EXISTENCE ===');
const links = Array.from(linkSet).sort();

const missingRoutes = [];
const existingRoutes = [];

links.forEach(route => {
  // Check if route exists in app or pages router
  // e.g. /services/seo -> src/app/services/seo/page.tsx or src/pages/services/seo.tsx
  const appPath1 = path.join(__dirname, 'src', 'app', route, 'page.tsx');
  const appPath2 = path.join(__dirname, 'src', 'app', route, 'page.jsx');
  const appPath3 = path.join(__dirname, 'src', 'app', route, 'page.js');
  const pagesPath1 = path.join(__dirname, 'src', 'pages', route + '.tsx');
  const pagesPath2 = path.join(__dirname, 'src', 'pages', route + '.jsx');
  const pagesPath3 = path.join(__dirname, 'src', 'pages', route, 'index.tsx');
  const pagesPath4 = path.join(__dirname, 'src', 'pages', route, 'index.jsx');

  const exists = fs.existsSync(appPath1) || fs.existsSync(appPath2) || fs.existsSync(appPath3) ||
                 fs.existsSync(pagesPath1) || fs.existsSync(pagesPath2) || fs.existsSync(pagesPath3) || fs.existsSync(pagesPath4);

  if (exists) {
    existingRoutes.push(route);
  } else {
    // Check if dynamic route covers it
    // e.g. /best-digital-marketing-agency-in-delhi -> /best-digital-marketing-agency-in-[city]
    if (route.startsWith('/best-digital-marketing-agency-in-')) {
      existingRoutes.push(route + ' (Handled by [city])');
    } else if (route.startsWith('/blog/')) {
      existingRoutes.push(route + ' (Handled by blog/[slug])');
    } else {
      missingRoutes.push(route);
    }
  }
});

console.log('TOTAL UNIQUE LINKS CHECKED:', links.length);
console.log('EXISTING:', existingRoutes.length);
console.log('MISSING:', missingRoutes.length);

if (missingRoutes.length > 0) {
  console.log('\n❌ MISSING ROUTES:');
  missingRoutes.forEach(r => console.log('  -', r));
} else {
  console.log('\n✅ ALL ROUTES EXIST!');
}

console.log('\n=== LIST OF ALL DISCOVERED ROUTES ===');
links.forEach(r => console.log('  ', r));
