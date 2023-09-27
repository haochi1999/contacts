const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const cors = require('koa2-cors')
const mongoose = require('./db')
const bodyParser = require('koa-bodyparser')

app.use(cors())
app.use(bodyParser())
app.use(router.routes())

app.listen(3003)