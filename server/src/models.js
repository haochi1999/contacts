const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    username: String,
    password: String,
})

module.exports = {
    User: model('user', UserSchema, 'User')
}