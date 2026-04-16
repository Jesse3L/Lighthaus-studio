const https = require('https');

const pages = ['services', 'about', 'contact', 'pricing'];

(async () => {
   for (let p of pages) {
       console.log(`===== /${p} =====`);
       await new Promise(resolve => {
           https.get(`https://www.lighthausstudio.com/${p}`, res => {
               let doc = '';
               res.on('data', c => doc += c);
               res.on('end', () => {
                   const banned = /(elevate|seamless|robust|cutting-edge|state-of-the-art|world-class|top-notch|revolutionize|transformative|game-changing|empower|synergy|tapestry|digital landscape|marketing landscape|realm|journey[^a-z]|navigate the|ecosystem|paradigm|holistic|bespoke|curate|in today's|moreover|furthermore|dive into|dive deep|deep dive|unlock|unleash|harness|leverage) /gi;
                   let matches = doc.match(banned);
                   if (matches) {
                       matches.forEach(m => console.log(m));
                   }
                   resolve();
               });
           });
       });
   }
})();
