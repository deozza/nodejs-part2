const fetch = require('node-fetch'); // https://www.npmjs.com/package/node-fetch
const express = require('express');

const PORT = process.env.PORT || 3000;
let app = express();


async function getResponseFromUrl(url){

    const res = await fetch(url);
    const json = await res.text();
    return json;

}

app.get('/get', async (req, res) => {
    const url = req.query.url;

    if(url === undefined || url ===  null || url.length <= 0){
    	res.status(400);
    	res.send('please provide a URL');
    	return;
    }

    try{
    	let json = await getResponseFromUrl(url);
		res.setHeader('Content-Type', 'application/json');
    	res.send(json)
    }catch(e){
    	res.status(400);
	    res.send(e);
    }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
