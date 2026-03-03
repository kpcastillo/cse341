require('dotenv').config();
const { MongoClient} = require('mongodb');
console.log("cwd =", process.cwd());


const uri = process.env.CONST_DB_URL;
if (!uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://")) {
  throw new Error(
    'Bad CONST_DB_URL. It must start with "mongodb://" or "mongodb+srv://".'
  );
}
console.log("CONST_DB_URL =", JSON.stringify(process.env.CONST_DB_URL));

async function main() {
	const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Quick, reliable connection test
        await client.db("admin").command({ ping: 1 });
        console.log("✅ Connected to MongoDB");
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error("Connection failed", e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 
