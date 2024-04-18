require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req,res) => {

    res.send('hello World!')
})
app.get('/twitter',(req,res)=> {

    res.send('yap u done this avirup keep on.')
})
app.get('/youtube',(req,res)=> {

    res.send('yap u done')
})
app.listen(process.env.PORT, () => {

    console.log(`Example app listening on port ${port}`)
})
