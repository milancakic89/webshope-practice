
const MongoClient = require('mongodb').MongoClient;


let _db;

const mongoConnect = ( callback ) =>{
    const uri = "mongodb+srv://pikolaus:SRwD6pvmDo3uuWv7@cluster0-ksiq9.mongodb.net/shop?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected')
    callback(client);
;
}

const getDb = (dbname, callback)=>{
    const uri = "mongodb+srv://pikolaus:SRwD6pvmDo3uuWv7@cluster0-ksiq9.mongodb.net/"+dbname+"?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        console.log('connected')
        const collection = client.db(dbname);
        callback(collection)
        client.close();
      });

}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;