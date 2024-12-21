var mongoClient = require('mongodb').MongoClient


URI="mongodb+srv://demouser:demouser1234@cluster0.i4ecn.mongodb.net/"

const client=new mongoClient(URI)

const dbName="Test"
async function main(){
    await client.connect();
    console.log("Connected Succesfully");
    const db=client.db(dbName)
    const collection=db.collection('user')

    return "done"
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close())






//NOTES

//go to mongoDB website
// create a free M0 cluster
// create a user 
// Get the connection string
// Install MongoDB compass
