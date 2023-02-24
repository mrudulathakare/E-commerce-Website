const http= require('http');

const server=http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
   // process.exit(); //hardcode exit is performed when we use process.exit(). never used irl
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h1>Hello From Node.js Server!</h1></body>');
   res.write('</html>');
res.end();
//Do not write after res.end() else will get error.
});

server.listen(3000);
