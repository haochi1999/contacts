const mongoose = require('mongoose')

mongoose.connection.on('connecting', () => {
    console.log('mongoose 开始进行连接')
})

mongoose.connection.on('connected', () => {
    console.log('mongoose 连接成功')
})

mongoose.connection.on('error', err => {
    console.log('mongoose connect失败', err)
})

mongoose.connect('mongodb://124.223.33.199/contacts', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

module.exports = mongoose