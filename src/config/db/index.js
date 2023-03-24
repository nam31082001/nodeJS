const mongoose=require('mongoose')


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/todolist', {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        })
        console.log('oki')
    } catch (error) {
        console.log(error)
    }
}
module.exports = { connect }