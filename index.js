const express = require("express")
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("Trust the process")
})
app.get('/login',(req,res)=>{
    res.send("<h1>Think of your credentials</h1>")
})
app.get('/youtube/praneetkedilaya',(req,res)=>{
    res.send('hi')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})