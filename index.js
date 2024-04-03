const http = require('http')
http.createServer((req,res)=>{
    res.write('hello good afternoon all of you');
    res.end();
}).listen(3000)
