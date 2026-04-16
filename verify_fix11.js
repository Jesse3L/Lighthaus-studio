const https = require('https');

https.get('https://www.lighthausstudio.com/', (res) => {
    console.log(`HTTP Status: ${res.statusCode}`);
    let doc = '';
    res.on('data', c => doc += c);
    res.on('end', () => {
        console.log("\n--- Grep Matches ---");
        const telRegex = /href="tel:8063419922"/g;
        let telMatches = doc.match(telRegex) || [];
        telMatches.forEach(m => console.log(`Matched tel link: ${m}`));
        
        const mailtoRegex = /<a[^>]*href="mailto:[^>]*>[^<]*<\/a>/gi;
        let mailtoMatches = doc.match(mailtoRegex) || [];
        mailtoMatches.forEach(m => {
            if (m.includes('natalie@lighthausstudio.com')) {
                console.log(`Matched mailto: ${m}`);
            }
        });
        
        const taglineRegex = /Real estate photography, video, and 3D tours for agents/g;
        let taglineMatches = doc.match(taglineRegex) || [];
        taglineMatches.forEach(m => console.log(`Matched tagline: ${m}`));

        console.log("\n--- Grep Zero Matches ---");
        console.log("mailto:undefined match count: " + (doc.match(/mailto:undefined/g) || []).length);
        console.log("Elevating listings match count: " + (doc.match(/Elevating listings/g) || []).length);
        console.log("{/* Social Placeholders */} match count: " + (doc.match(/Social Placeholders/g) || []).length);
    });
});
