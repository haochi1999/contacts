const mongoose = require('mongoose')

const url = 'mongodb://root:666666@124.223.33.199:27017'

mongoose.connection.on('connecting', () => {
    console.log('mongoose 开始进行连接')
})

mongoose.connection.on('connected', () => {
    console.log('mongoose 连接成功')
})

mongoose.connection.on('error', err => {
    console.log('mongoose connect失败', err)
})

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    connectTimeoutMS: 300,
})


// MongoClient.connect(url, (err, db) => {
//     console.log('connected successfully to server')
// })

// const db = mongoClient.db('contacts')
// const client = new MongoClient(url)

// async () => {
//     await client.connect()
//     console.log('Connected successfully to server')
// }
// const db = client.db('contacts')

// module.exports = mongoose