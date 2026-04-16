const https = require('https');
https.get('https://www.lighthausstudio.com/', res => {
  let doc = ''; res.on('data', c => doc += c); res.on('end', () => {
    let queries = [
      "HDR photography",
      "48-Hour Turnaround",
      "What Lighthaus Delivers",
      "Fill out the form or text",
      "I&#x27;m Natalie",
      "Next Shoot Starts at $199",
      "A look at recent"
    ];
    queries.forEach((q, i) => {
        let snippetIndex = doc.indexOf(q);
        if(snippetIndex !== -1) {
            console.log(`A${i+1}: ...${doc.slice(snippetIndex - 10, snippetIndex + Math.max(q.length, 120)).replace(/\n/g, '')}...`);
        } else {
            console.log(`A${i+1}: NOT FOUND`);
        }
    });

    ['cutting-edge', 'Elevate', 'elevates', 'Whether it is'].forEach(b => {
        const matches = (doc.match(new RegExp(b, 'gi')) || []).length;
        console.log(`Banned '${b}': ${matches} matches`);
    });
  })
});
