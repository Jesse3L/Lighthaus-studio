const https = require('https');

const pages = [
  'https://www.lighthausstudio.com/services',
  'https://www.lighthausstudio.com/about',
  'https://www.lighthausstudio.com/contact',
  'https://www.lighthausstudio.com/pricing'
];

pages.forEach(p => {
   https.get(p, res => {
       console.log(`HTTP Status: ${res.statusCode} - ${p}`);
       let doc = '';
       res.on('data', c => doc += c);
       res.on('end', () => {
           // Grep checks
           if (p.includes('services')) {
               console.log("services grep 1: " + (doc.match(/Five deliverables, one photographer/i) || [])[0]);
               console.log("services grep 2: " + (doc.match(/Canon R8 on a leveled tripod/i) || [])[0]);
               console.log("services grep 3: " + (doc.match(/Matterport Pro3 so buyers walk/i) || [])[0]);
           }
           if (p.includes('about')) {
               console.log("about grep 1: " + (doc.match(/Lighthaus Studio is a new business/i) || [])[0]);
               console.log("about grep 2: " + (doc.match(/Every part of the job is mine/i) || [])[0]);
           }
           if (p.includes('contact')) {
               console.log("contact grep 1: " + (doc.match(/straight to my phone/i) || [])[0]);
           }
           if (p.includes('pricing')) {
               console.log("pricing grep 1: " + (doc.match(/one-page prep checklist/i) || [])[0]);
           }
           
           // Banned words check
           const banned = /(elevate|seamless|robust|cutting-edge|state-of-the-art|world-class|top-notch|revolutionize|transformative|game-changing|empower|synergy|tapestry|digital landscape|marketing landscape|realm|journey[^a-z]|navigate the|ecosystem|paradigm|holistic|bespoke|curate|in today's|moreover|furthermore|dive into|dive deep|deep dive|unlock|unleash|harness|leverage) /gi;
           let bannedMatch = doc.match(banned);
           if (bannedMatch) {
               console.log(`BANNED WORD FOUND ON ${p}: ${bannedMatch[0]}`);
           } else {
               console.log(`Banned checks clear on ${p}`);
           }
       });
   });
});
