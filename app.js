const express = require('express')
const app = express()
const port = 3000

// get method 요청에 대한 라우팅
app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/test', (req, res) => {
	res.send('This is test')
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})