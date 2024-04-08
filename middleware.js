const express  = require('express')
const app = express()
const middle1 = require('./my_modules/middle1')

// 미들웨어 등록 use: 모든 method(get, post, put, delete 등)에 대한 처리
// arg로 경로를 지정하지 않으면, 모든 경로에 대해 처리
app.use(middle1)

app.get('/', (req, res, next) => {
    console.log('Hello')
    next()
})

app.get('/', (req, res) => {
    console.log('World')
})

app.listen(3000)