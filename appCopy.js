const http= require('http');
const fs = require('fs');

const server=http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    if (url ==='/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>');
        res.write('</html>');  
        return res.end();
    }
    if(url ==='/message' && method ==='POST'){
        const body=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk );
    });
    req.on('end', () => {
      const parsedBody= Buffer.concat(body).toString(); 
      const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt',message);
    });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();   
    }    // process.exit(); //hardcode exit is performed when we use process.exit(). never used irl
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h1>Hello From my Node.js Server!</h1></body>');
   res.write('</html>');
   res.end(); //Do not write after res.end() else will get error.
});

server.listen(3011);
