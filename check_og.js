const https = require('https');
['/blog', '/terms'].forEach(path => {
  https.get('https://www.lighthausstudio.com' + path, res => {
    let doc = ''; res.on('data', c => doc += c); res.on('end', () => {
      const match = doc.match(/<meta[^>]*property="og:url"[^>]*>/i);
      console.log(`Path ${path} og:url:`, match ? match[0] : 'NONE');
    })
  });
});
