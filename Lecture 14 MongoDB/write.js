const {MongoClient, Db} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017'
const DB_NAME = 'tododb';

async function writeTask(){
    const client = await MongoClient.connect(MONGO_URL,{ useUnifiedTopology: true})
    const tododb = client.db(DB_NAME)

    const todos = tododb.collection('todos')
    const todo = {
        task: 'an important task',
        priority: 2, 
        owner: 'manager'
    }

    const result = await todos.insertOne(todo)
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(result)
}

async function writeTasks(){
    const client = await MongoClient.connect(MONGO_URL,{ useUnifiedTopology: true})
    const tododb = client.db(DB_NAME)

    const todos = tododb.collection('todos')

    const result = await todos.insertMany([
        {task: 'sample task 1', priority:4, owner:'security'},
        {task: 'sample task 2', priority:1, owner:'Ceo'},
        {task: 'sample task 3', priority:3, owner:'manager'},
        {task: 'sample task 4', priority:2, owner:'executive'},

    ])
    
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(result)

}

writeTasks()