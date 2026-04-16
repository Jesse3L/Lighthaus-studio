const https = require('https');
https.get('https://www.lighthausstudio.com/real-estate-photography-clovis-nm', res => {
    console.log(`HTTP Code: ${res.statusCode}`);
    let doc = ''; res.on('data', c => doc += c); res.on('end', () => {
        console.log(`Title: ${(doc.match(/<title[^>]*>(.*?)<\/title>/i) || [])[1]}`);
        console.log(`Description: ${(doc.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i) || doc.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"[^>]*>/i) || [])[1]}`);
        console.log(`Canonical: ${(doc.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i) || doc.match(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"[^>]*>/i) || [])[1]}`);
        console.log(`H1: ${(doc.match(/<h1[^>]*>(.*?)<\/h1>/i) || [])[1]}`);
        
        let schemaMatch = doc.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi) || [];
        let types = [];
        schemaMatch.forEach(s => {
            let inner = s.replace(/<[^>]*>/g, '');
            try {
                let parsed = JSON.parse(inner);
                if (Array.isArray(parsed)) {
                    parsed.forEach(p => types.push(p['@type']));
                } else {
                    types.push(parsed['@type']);
                }
            } catch(e) {}
        });
        console.log(`Schema Types: ${types.join(', ')}`);
    });
});

https.get('https://www.lighthausstudio.com/sitemap.xml', res => {
    let doc = ''; res.on('data', c => doc += c); res.on('end', () => {
        console.log(`Sitemap entry: ${(doc.match(/<loc>.*?clovis.*?<\/loc>/i) || [])[0]}`);
    });
});

https.get('https://www.lighthausstudio.com/', res => {
    let doc = ''; res.on('data', c => doc += c); res.on('end', () => {
        let match1 = doc.match(/<a[^>]*href="\/real-estate-photography-clovis-nm"[^>]*>Clovis, NM<\/a>/i);
        console.log(`Homepage internal link 1 (LocalArea): ${match1 ? match1[0] : 'NOT FOUND'}`);
        
        let match2 = doc.match(/<a[^>]*href="\/real-estate-photography-clovis-nm"[^>]*>Clovis, NM and Eastern New Mexico<\/a>/gi);
        console.log(`Homepage internal link 2 (AboutPreview): ${match2 ? match2[0] : 'NOT FOUND'}`);
    });
});

https.get('https://www.lighthausstudio.com/services', res => {
    let doc = ''; res.on('data', c => doc += c); res.on('end', () => {
        let match = doc.match(/<a[^>]*href="\/real-estate-photography-clovis-nm"[^>]*>Clovis<\/a>/i);
        console.log(`Services internal link: ${match ? match[0] : 'NOT FOUND'}`);
    });
});
