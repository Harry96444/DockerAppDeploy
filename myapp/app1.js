const express = require('express')
const app = express()
app.get('/',(req,res) => res.send('hello world how are you and'));
app.listen(3003,() => {
    console.log('My rest Api is running on port 3000!!')
})