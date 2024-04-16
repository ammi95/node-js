const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'curd')
const filepath = `${dirPath}/file.txt`

// fs.writeFileSync(filepath,'this is simple txt file')
// fs.readFile(filepath,'utf8',(err, item)=>{
//     console.log(item)
// })
// fs.appendFile(filepath,'and more text in this file',(err)=>{
//     if(!err) console.log('file is updated')
// })
// fs.rename(filepath,`${dirPath}/aman.txt`,(err)=>{
//     if(!err) console.log('file name is updated')
// })
fs.unlinkSync(`${dirPath}/aman.txt`)