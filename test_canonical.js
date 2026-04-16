const https = require('https');
const pages = ['/', '/portfolio', '/services', '/about', '/contact', '/pricing', '/blog', '/terms'];

Promise.all(pages.map(p => new Promise(resolve => {
  https.get('https://www.lighthausstudio.com' + p, res => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      const match = data.match(/<link[^>]*rel="canonical"[^>]*>/);
      resolve(p + ' -> ' + (match ? match[0] : 'No canonical link found'));
    });
  });
}))).then(results => {
  results.forEach(r => console.log(r));
});
