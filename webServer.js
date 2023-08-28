///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// CREATING WEBSERVER AND LISTENING IT ON PORT 8000
///////////////////////////////////////////////// HANDLING ROUTING
////////////////////////////////////////////////  BUILDING API
/// . IT BASICALLY CURRENT WORKING DIRECTORY (EG. node-basic-learning)
/// __dirname TRANSLATE TO THE DIRECTORY IN WHICH SCRIPT THAT WE ARE CURRENTLY EXECUTING IS LOCATED.

const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/api-data/data.json`, 'utf-8');
    // console.log(data)
    // Parsing json data into javascript but not send as response because it is a javascript object.
    // we send response only as string.
    // const dataObj = JSON.parse(data);
    // console.log(dataObj)

  // Creating web server
  const server = http.createServer((req,res)=>{
    // console.log(req);
  const pathName = req.url;

  ////////////////////////////////////////
  //////////////ROUTING
   if(pathName === '/' || pathName === '/overview')
       res.end('This Overview page');
   else if(pathName === '/product')
       res.end('This is from Product page')
   else if(pathName === '/contact')
       res.end('This is from contact page')
   else if(pathName === '/api'){     
        res.writeHead(200, {
           "content-type": "application/json",
        });
       res.end(data)  // We send response data in string only not as javascript object
     }
   else {
       res.writeHead(404, {
      "content-type": "text/html",
        "my-own-header": "Hello World",
       });
       res.end("<h1>Page not found. Please find valid URL</h1>")
    }
})

// Listening to incoming request
server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to request on port 8000")
})