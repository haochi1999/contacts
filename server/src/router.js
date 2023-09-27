const router = require('koa-router')()
const db = require('./db')

router.get('/', async ctx => {
    const resp = await db.collection('user').find({}, {username: 'root'})
    console.log(resp)
    ctx.body = '123'
})

module.exports = router