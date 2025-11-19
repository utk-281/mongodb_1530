//! data and information
//? data --> raw facts and figures
//! example --> 12, 34, 45, varun, ashwin, chetna, english

//~ varun scored 12 in english exam --> information
//~ information --> processed data

//! database -> it is like a container in which we can manage(CRUD--> create, read, update, delete) the data.

//? DBMS --> database management system, through which we can perform CRUD. examples --> mySQL, oracleSQL, mongoDB, couchDB

//! data can be stored in 2 ways --> 1) SQL 2) NoSQL

//? SQL --> structured query language (mySQL, oracleSQL, postgres, etc....)
//~ 1) in all SQL databases, data is stored in tables (rows and cols)
//~ 2) also known as RDBMS (relational database management system)
//~ 3) without creating a table, we cannot store data in it i.e, we have to define a schema first --> it is fixed
//~ 4) in sql dbs, schema cannot be violated

//? NoSQL --> not only SQL (mongoDB, couchDB, amazonDynamoDB, etc...)
//~ here data is stored in documents, key-value pair, graphs, wide cols
//~ also known as non-RDBMS
//~ here no need to create any schema, add whatever data we want, it is dynamic in nature

//& --> in noSQL dbs, we have in total 4 categories
//~ 1) document based --> in document based databases, data is stored in js objects/JSON like documents (JSON Like means BSON)
//? example --> mongodb, couchDB
userA = {
  name: "abc",
  age: 34,
  id: 12,
};
userB = {
  name: "abc",
  age: 34,
  id: 12,
};

//~ 2) key-value pair (caching, session management, etc...) --> here data is stored in key-value pairs (where each key-value pair is a separate entity)
//? example --> redisDB

//~ 3) graphs --> in this, data is stored in the form of nodes and edges
//? example --> neo4j

//~ 4) wide column --> (columnar database)
//? useCase --> ai models, data analytics
//? example --> cassendraDB
//TODO:

//& difference between SQL and noSQL databases
//? SQL
//~ data is stored in tables (rows and cols)
//~ we have a predefined schema/structure/table
//~ it supports vertical scaling
//~ it is used when relation between data is important
//~ data rollback is possible (undo)
//~ properties --> ACID (atomicity, consistency, isolation, durability)
//~ examples --> mySQL, oracleSQL

//? noSQL
//~ data is stored in documents, key-value pair, graphs, wide cols
//~ here by default, we don't have any schema (to validate the data)
//~ it supports horizontal scaling
//~ it is used when relation between data is not important and we have to store large amount of data
//~ data rollback is not possible
//~ properties --> BASE(basically available, eventually consistent, not durable)
//~ examples --> mongoDB, couchDB

//! scaling --> scaling refers to altering the size or capacity of something

// let myLaptop = {
//   RAM: 16,
//   HDD: 1024,
// };

//? free ram --> 1, free HDD --> 1
//! existing data, application (x)

let myLaptopUpgraded = {
  RAM: 32,
  HDD: 2024,
};
//? this is known as vertical scaling: in vertical scaling, new resources are added to the existing system

//? in case of horizontal scaling --> you are buying a new laptop
//? in horizontal scaling= new resources are added with the existing system

//! ====================================== mongoDB =================================
//~ It is a document based nosql database which stores data in JSON like documents and is dynamic in nature.

//! install three things
//? https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.2.1-signed.msi ==> community server

//? https://downloads.mongodb.com/compass/mongodb-compass-1.48.2-win32-x64.exe ==> compass

//? https://downloads.mongodb.com/compass/mongosh-2.5.9-x64.msi ==> mongosh (mongo shell)

//? https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.13.0.msi ==> db tools

//! mongodb server --> it is a database server, through which we can connect to the database and interact with it, it's address is "mongodb://localhost:27017/"
//~ to start or stop the server >> open cmd as admin >> stop --> "net stop mongodb" >> start --> "net start mongodb"

//! compass --> it is a GUI (graphical user interface), using which we can interact with database without writing any code.
//? interaction means CRUD operations (create, read, update, delete)
//? in compass, js objects cannot be inserted.

//! shell --> (command line interface), it is a interface through which we can interact with db with the help of commands (code). it is built using javascript i.e, using shell we can pass either js objects or json data

//? to enter mongosh --> open cmd >> type mongosh >> press enter
//? to exit mongosh --> type .exit or press ctrl+c >> press enter

//! =================== shell commands =====================================

//? 1) to list all the databases
//~ ==> show dbs or show databases

//? 2) to create a new database or to switch to a database
//~ ==> use database_name
//& use library
//& here, if the database name does not exist, it will be created otherwise it will switch to that database

//! the shell prompt denotes current database and by default it is set to test db
//! after every operation, if we want to see the changes in compass, i need to refresh the compass application

//? 3) to create a collection --> createCollection()
//~ db.createCollection("collection_name")
//& example db.createCollection("books")

//! what is the datatype of db? ==> object

//? 4) to display all the collections present in the database
//~ show collections

//! create a school database and inside that create 3 collections 1) students 2) teachers 3) otherStaff

//~ shell shortcuts -- 1) press tab to get auto complete
//~ 2) use up and down arrow keys to go through all the previous commands
//~ 3) type cls or press ctrl+l to clear the shell

//~ 5) to rename the collection --> renameCollection()
db.collection_name.renameCollection("new_collection_name");
//& example -->
db.otherStaff.renameCollection("faculty");

//! in mongodb, renaming database is not possible

//~ 6) to delete a collection --> drop()
db.collection_name.drop();
//& example -->
db.faculty.drop();

//~ 7) to delete a database --> dropDatabase()
db.dropDatabase();

//~ 8) to insert a single document --> {} (insertOne())
db.collection_name.insertOne({ doc }, { options });
//& example -->
db.teachers.insertOne({
  name: "abc",
  age: 23,
  subject: "science",
});

//& response ==> ObjectId is a datatype of BSON
let resp = {
  acknowledged: true,
  insertedId: ObjectId("691d9b2b51082cb001735189"),
};

//~ BSON ==>
// 1) it stands for Binary JSON (javascript object notation)
// 2) it is a binary encoded form of JSON
// 3) it is used to store/fetch the data from database
// 4) in this format we can store various other datatypes like undefined, Dates, ObjectID etc..
// 5) it is not human readable

//~ ObjectId ==> ObjectId("691d9c8f51082cb00173518a")
// 1) it is unique for each and every document.
// 2) it is a datatype of BSON.
// 3) it is represented in 12 bytes (12 * 8 bits) hexadecimal format.
// 4) it is generated by mongodb, if not passed in the input.
// 5) it acts as primary key.

let str = "691d9c8f51082cb00173518a";
//? this objectId is divided into three major parts
//~ first 5 bytes --> "691d9c8f51": it represent the timestamp.
//~ next 4 bytes --> "082cb001": PUI(process unique identifier) is a combination of process ID and machine ID.
//~ last 3 bytes --> "73518a": it starts with a random value and is incremented each time by one when a new document is inserted. (counter)

// objectId is of 96 bits (24) 4

//~ 9) to insert multiple documents --> {} (insertMany())
//? db.collection_name.insertMany([{}, {}, {}, ...], { options });
db.teachers.insertMany([
  { email: "test1@gmail.com" }, // doc1
  { email: "test2@gmail.com" }, // doc2
]);

//! parameters are used when a function is declared
//~ arguments are passed while calling a function

//~ 10) to get/fetch/read single document --> findOne()
db.collection_name.findOne({ filter }, { projection }, { options });
//? filter --> conditions on which the document needs to be fetched
