const monogdb = require('mongodb')

const MongoClient = monogdb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)


    db.collection('tasks').insertMany([
        {
            description: 'Bring milk from store',
            completed: false
        },
        {
            description: 'complete homework',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            console.log('unable to insert document')
        }

        console.log(result.ops)
    })
})
