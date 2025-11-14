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

//! scaling --> scaling refers to altering the size or capaciry of something

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
//? this is known as vertical scaling: in vertical scaling=, new resources are added to the existing system

//? in case of horizontal scaling --> you are buying a new laptop
//? in horizontal scaling= new resources are added with the existing system
let myLaptop = {
  RAM: 16,
  HDD: 1024,
};

let newLaptop = {
  RAM: 32,
  HDD: 2024,
};
