const https = require('https');
const pages = ['/', '/portfolio', '/services', '/about', '/contact', '/pricing', '/blog', '/terms'];

Promise.all(pages.map(p => new Promise(resolve => {
  https.get('https://www.lighthausstudio.com' + p, res => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      const match = data.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g);
      if (match) {
        const types = match.map(m => {
          try {
            const inner = m.match(/>([\s\S]+)<\/script>/)[1];
            const obj = JSON.parse(inner);
            return obj['@type'];
          } catch(e) { return 'ParseError' }
        });
        resolve(p + ' -> ' + types.join(', '));
      } else {
        resolve(p + ' -> No schema found');
      }
    });
  });
}))).then(results => {
  results.forEach(r => console.log(r));
});
