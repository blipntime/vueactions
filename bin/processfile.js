const fs = require('fs')
const core = require('@actions/core')

let contents
try {
  contents = fs.readFileSync('somefile.output', 'utf8')
} catch (err) {
  core.setFailed(`Action failed with error ${err}`)
}

console.log(contents, "\nProcess file Done")

//
// process.exit(1);