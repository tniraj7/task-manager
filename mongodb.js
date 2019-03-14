const monogdb = require('mongodb')

const MongoClient = monogdb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    
    const db =  client.db(databaseName)
    db.collection('users').insertOne({
        name: 'Niraj',
        age: 27
    })
})
