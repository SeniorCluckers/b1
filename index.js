const { exec } = require('node:child_process')

const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {    
    // run the `ls` command using exec
    exec('sh test.sh ./', (err, output) => {
        // once the command has completed, the callback function is called
        if (err) {
            // log and return if we encounter an error
            console.error("could not execute command: ", err)
            return
        }
        // log the output received from the command
        res.send(output);
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})