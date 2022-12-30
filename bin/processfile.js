const fs = require('fs')
const core = require('@actions/core')

const contents = fs.readFileSync('somefile.output', 'utf8')

console.log(contents, "\nDone")

//core.setFailed(`Action failed with error`)

process.exit(1);