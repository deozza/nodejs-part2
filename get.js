const fetch = require('node-fetch'); // https://www.npmjs.com/package/node-fetch

const url = process.argv[2];

if(url === undefined || url === null || url.lentgh <= 0){
    console.error("please provide a URL");
    return;
}

(async () => {
    try{
        const res = await fetch(url);
        const json = await res.text();
        console.log(json);  
    }catch(e){
        console.error(e);
    }

})();
