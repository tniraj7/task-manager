
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').updateOne({
        _id: new ObjectID("5c8cf820ab59c93f8c8d38f1")
    }, {
            $set: {
                name: 'don'
            },
            $inc: {
                age: 1
            }
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })

    db.collection('tasks').updateMany({
        completed: false
    }, {
            $set: {
                completed: true
            }
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
})
