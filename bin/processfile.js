const fs = require('fs')

const contents = fs.readFileSync('somefile.output', 'utf8')

console.log(contents, "\nDone")