const http = require('http');
const fs = require('fs')
http.createServer((req,res)=> {
console.log(req.url)
if(req.url.includes('index.')){
 res.end(fs.readFileSync('.' + req.url))
}else{
res.end('')}

}).listen(2020)