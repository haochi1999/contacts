const router = require('koa-router')()
const {User} = require('./models')
const {get} = require('lodash')

router.get('/login', async ctx => {
    const {username, password} = ctx.query || {}
    const resp = await User.findOne({username, password})
    if (get(resp, 'username')) {
        ctx.body = {code: 200}
        return
    }
    ctx.body = {message: '用户名或者密码错误'}
})

module.exports = router