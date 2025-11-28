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
//~ first 4 bytes --> "691d9c8f51": it represent the timestamp.
//~ next 5 bytes --> "082cb001": PUI(process unique identifier) is a combination of process ID and machine ID.
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

//& mongoimport command
//? mongoimport "path" -d db_name -c coll_name --jsonArray
//? mongoimport "C:\Users\ASUS\Desktop\Classes\emp.dept.json" -d demo23 -c coll1 --jsonArray

//~ 10) to get/fetch/read single document --> findOne()
db.collection_name.findOne({ filter }, { projection }, { options });
//? filter --> conditions on which the document needs to be fetched
//? projection --> it is used to display/hide the fields of selected document. _id will be automatically set to display whenever we use projection, if we want to hide it use _id:0
//~ projection part == { fieldName: 1, fieldName: 0  }
//~ 1 to display and 0 to hide

//& --> mongodb commands are case-sensitive

//! ques>> find the details of emp whose name is "jones"
db.emp.findOne({ empName: "jones" });

//? passing empty filter object --> first document will be fetched
db.emp.findOne({});
db.emp.findOne();

//! ques>> display the job and salary of emp whose name is "jones"
db.emp.findOne({ empName: "jones" }, { sal: 1, _id: 0, job: 1 });

db.emp.findOne({ empName: "jones" }, { sal: 1, empName: 0 });
//?  Cannot do exclusion on field empName in inclusion projection --> this will give error

db.emp.findOne({ job: "clerk" }); //? if there are multiple documents which are fulfilling the passed condition, then findOne() will return the first document which matches the conditions

//~ 11) to get/fetch/read multiple documents --> find()
db.collection_name.find({ filter }, { projection }, { options });
//? in find(), all the documents are returned which are fulfilling the conditions

db.emp.find({ job: "clerk" }, { empName: 1, _id: 0 });

//! if no conditions are passed, then all the documents are fetched.
db.emp.find({});
db.emp.find();

//~ 12) to delete a single document --> deleteOne()
db.collection_name.deleteOne({ filter });

db.demo.deleteOne({ name: "def" });
db.demo.deleteOne({}); //? this will delete the first matched document
db.demo.deleteOne(); //? this will throw an error

//~ 13) to delete multiple documents --> deleteMany()

db.demo.deleteMany({ name: "def" }); //? this will delete all the documents in which name is "def"
db.demo.deleteMany({}); //? this will delete all the documents
db.demo.deleteMany(); //? this will throw an error

//~ 14) to update single document --> updateOne()
db.collection_name.updateOne({ filter }, { updationValue }, { options });
//? filter --> to target the document
//? updationValue --> to give new data
//? options --> upsert (todo)

//~ 14) to update multiple documents --> updateMany()
db.collection_name.updateMany({ filter }, { updationValue }, { options });

//! Operators ==> all operators in mongodb starts with "$"
//~ query operators: used in filter object
//? ==> comparison operators (less than, not equals to, etc.)
//? ==> logical operators (logical AND, logical OR, etc..)
//? ==> array operators (size, all, elemMatch, etc..)
//? ==> element operators (exists, type, etc..)
//? ==> evaluation operators (regex, expr, etc..)
//~ update operators
//? ==> field update op (set, unset, etc..)
//? ==> arithmetic update op (max, min, inc, etc..)
//? ==> array update op (push, pull, etc..)
//~ aggregation operators
//? ==> pipeline stages op (match, group, etc..)
//? ==> accumulator op (max, min, avg, count, sum)
//? ==> arithmetic and date op (add, subtract, date, etc..)
//~ projection operators ($, $slice, etc..)
//~ geospatial operators ==> (GeoJSON format)

//! ============================ Comparison operators =============================
//? equals to ----------------------------------------> $eq
//? not equals to ------------------------------------> $ne
//? greater than -------------------------------------> $gt
//? greater than or equals to ------------------------> $gte
//? lesser than --------------------------------------> $lt
//? lesser than or equals to -------------------------> $lte
//? in -----------------------------------------------> $in
//? not in -------------------------------------------> $nin

//~ syntax for first 6 operators
//? { fieldName: { $op: value } }

//~ syntax for $in and $nin --> ($in:= it returns the documents which fulfills any one of the given value)
//~ ($nin:= it returns the documents which fails to fulfill the given values)
//? { fieldName: { $in/$nin: [value1, v2, v3,......] } }

//! ques>> find all the employees who are having salary greater than 1000
db.emp.find({ sal: { $gt: 1000 } });

//! ques>> find all the employees who are working as clerk.
db.emp.find({ job: { $eq: "clerk" } }, { empName: 1, _id: 0 });
db.emp.find({ job: "clerk" }, { empName: 1, _id: 0 });

//& --> case1) when multiple conditions are applied on same field: the last condition will get executed
//! ques>> find all the names of employees from dept 10 or 20
db.emp.find(
  { deptNo: 20, deptNo: 10, deptNo: 30, deptNo: 40 },
  { empName: 1, _id: 0, deptNo: 1 }
); //? this will return the documents whose deptNo is 40

db.emp.find({ deptNo: { $in: [10, 20] } }, { empName: 1, _id: 0, deptNo: 1 });
//& --> case2) when multiple conditions are applied on different fields: works as LOGICAL AND (all the conditions must be fulfilled)
db.emp.find(
  { sal: { $gt: 1400 }, job: "clerk", sal: 1200 },
  { sal: 1, job: 1, _id: 0 }
);
//? this will return the documents who are clerk and are having salary greater than 1400

/* 
! Find employees with sal greater than 2000.

! Find departments with budget less than or equal to 150000.

! Query employees whose city equals "Chicago".

! Find employees whose education is not "bachelor".

! Find employees whose deptNo is in [10, 30].

! Find employees whose empNo is not in [7369, 7499].

! Query employees with bonus >= 1000 and sal < 3000. (not this)

! Find employees where mgr field is null.

! Find departments where headOfDept exists (non-null). (not this)

! Query employees whose age is between 25 and 40 (inclusive). (not this)
*/

//? Find employees whose education is not "bachelor".
db.emp.find(
  { education: { $ne: "Bachelor" } },
  { education: 1, _id: 0 },
  { collation: { locale: "en", strength: 2 } } //? to avoid case sensitivity
);
//~ locale --> language
//~ strength:2 --> uppercase===lowercase but accent in-sensitive
db.emp.find({ education: { $nin: ["bachelor"] } }, { education: 1, _id: 0 });

//? ! Find employees where mgr field is null.
db.emp.find({ mgr: null }, { mgr: 1, _id: 0, empName: 1 });

//! ============================ Logical operators =============================
//? logical and -----------------------------------> $and
//? logical or ------------------------------------> $or
//? logical nor -----------------------------------> $nor
//? logical not -----------------------------------> $not

//? syntax for $and, $or, $nor
//? { $op: [{}, {}, {}, ........] }

//! Query employees with sal >= 1100 and sal < 2000. (not this)
db.emp.find(
  {
    $and: [
      { sal: { $gte: 1100 } }, // con1
      { sal: { $lt: 2000 } }, // con2
    ],
  },
  {
    sal: 1,
    _id: 0,
  }
);

//! ques>> find all the names of employees from dept 10 or 20
db.emp.find(
  {
    $or: [
      { deptNo: 10 }, // con1
      { deptNo: 20 }, // con2
    ],
  },
  {
    deptNo: 1,
    _id: 0,
  }
);

db.emp.find({ deptNo: { $in: [10, 20] } });

//~ working of $nor --> it will fetch all the documents which fails to fulfill the given conditions
db.emp.find(
  {
    $nor: [
      { deptNo: 10 }, // con1
      { deptNo: 20 }, // con2
    ],
  },
  {
    deptNo: 1,
    _id: 0,
  }
);

//? syntax for $not ==> logical not will inverse the given condition (example: if passed $gt:1200, inverse condition will be $lte:1200)
//? { fieldName: {$not: { expression }} }

// expression --> x>=8 inverse x<8
// expression --> x>8 inverse x<=8
// expression --> y=="abc" inverse y!= "abc"

db.emp.find({ job: { $not: { $eq: "clerk" } } }, { job: 1, _id: 0 });

db.emp.find({ sal: { $not: { $lte: 1250 } } }, { sal: 1, _id: 0 });
//? gt 1251

//! get all the names and date of joining who have joined after 1985
//? {fieldName:ISODate("YYYY-MM-DD")}
db.emp.find(
  { hireDate: { $gt: ISODate("1985-12-31") } },
  { hireDate: 1, _id: 0, empName: 1 }
);

db.emp.find(
  { hireDate: { $gt: "1985-12-31" } },
  { hireDate: 1, _id: 0, empName: 1 }
); //? in this case it will not work

db.emp.find(
  { hireDate: { $gte: ISODate("1986-01-01") } },
  { hireDate: 1, _id: 0, empName: 1 }
);

//! get all the names and date of joining who have joined in month of jan
db.emp.find(
  {
    $expr: { $eq: [{ $month: "$hireDate" }, 1] },
  },
  { empName: 1, hireDate: 1, _id: 0 }
);
db.emp.find(
  {
    $expr: {
      $in: [{ $dayOfWeek: "$hireDate" }, [1, 7]],
    },
  },
  { empName: 1, hireDate: 1, _id: 0 }
);

//~ fetching based on _id ==> { _id: ObjectId("66a23517b5c6990483c4e49b") }

//! find the details of user whose unique is 66a23517b5c6990483c4e49b
db.emp.findOne({ _id: ObjectId("66a23517b5c6990483c4e49b") });

//~ if we want to access nested properties, use double quotes
//! display rating and empName of emp who have rating greater than 3.9
db.emp.find(
  { "performance.rating": { $gt: 4.2 } },
  { empName: 1, _id: 0, "performance.rating": 1 }
);
// db.emp.find({ performance[rating]: { $gt: 3.9 } }, { empName: 1, _id: 0 });

//! fetch all the emp names and skills who are having sql as one of the skill
db.emp.find({ skills: "sql" }, { empName: 1, skills: 1, _id: 0 });

//! fetch all the emp names and skills who are having sql and excel as one of the skill
db.emp.find({ skills: ["excel", "sql"] }, { empName: 1, skills: 1, _id: 0 });
//~ this will not work, until we don't know the order of the elements
db.emp.find(
  {
    $and: [
      // con1
      { skills: "excel" }, // con2,
      { skills: "sql" },
    ],
  },
  { empName: 1, skills: 1, _id: 0 }
);

/* 
Q: Write a query to find the details of employee with empNo: 7839 using findOne().
Q: What are the three parameters of findOne()? Which ones are optional?
Q: Write a query to find one employee from department 30.
Q: Find one employee whose job is "manager".
Q: Write a query to find any one document from the emp collection (no filter).
Q: Find one employee and return only their empName and job fields (exclude _id).
Q: What does findOne() return if no document matches the filter?
Q: Find one employee with sal greater than 3000.
Q: Find one employee who works in "Chicago" city.
Q: Write a query to find one employee whose empName is "king" and return only empName, job, and sal.
Q: Find one document from dept collection where deptNo is 20.
Q: What is the difference between findOne() and find()?
Q: Find one employee whose age is less than 30.
Q: Write a query to find one employee with commission (comm) equal to 0.
Q: Find one employee who has "python" in their skills array.
Q: Find the department located in "dallas" (case-sensitive).
Q: Write a query to find one employee with salary between 2000 and 3000.
Q: Find one employee whose manager (mgr) is 7698.
Q: In projection, what does 1 mean and what does 0 mean?
Q: Find one employee who works in department 20 AND has a salary greater than 2000, returning only empName, sal, and deptNo.
Q: Write a query to find one employee whose performance rating is greater than 4.5 (nested field).
Q: Find one employee from the emp collection who either works in department 10 OR has a job as "analyst".
Q: Write a query to find one employee who does NOT have insurance (havingInsurance: false).
Q: Find one employee whose salary is in the array [1100, 1250, 1500].
Q: Write a query to find one employee who has both "html" and "python" in their skills array.
Q: Find one remote employee (isRemote: true) who works in department 20.
Q: Write a query to find one employee whose age is NOT equal to 25.
Q: Find one employee whose empName starts with "m" (you'll need to research regex).
Q: Write a query to find the department with exactly 0 employees.
Q: Find one employee with a performance rating less than or equal to 4.0 and return only their empName and performance object.
Q: Write a query to find one employee whose education is "master" and job is "manager".
Q: Find one employee who was hired after January 1, 1982 (hireDate comparison).
Q: Write a query to find one employee whose projects array contains "project_alpha".
Q: Find one employee who has a bonus greater than 1000 but no commission (comm: 0).
Q: Write a query to find one department that is NOT active (isActive: false).
Q: Find one employee whose city is either "Noida" or "Pune".
Q: Write a query to find one employee with totalHoursWorked greater than 2000.
Q: Find one employee whose lastReviewDate (nested in performance) is in 2024.
Q: Write a query to find one employee whose empNo is greater than 7800 and return all fields except _id and skills.

*/

//~ ============================ array operators =================================
//? $all --> it fetches the documents which matches all the given conditions
//! syntax --> { fieldName: { $all: [v1, v2, v3,.......] } }

//? $size --> it fetches the documents which matches the given size
//! syntax --> { fieldName: {$size: +INTEGER} }

//? $elemMatch (element match): it fetches the documents in which the elements matches the given conditions
//! syntax --> { fieldName: { $elemMatch: {conditions} } }

//! fetch all the emp names and skills who are having sql and excel as one of the skill
db.emp.find(
  { skills: { $all: ["excel", "sql"] } },
  { empName: 1, skills: 1, _id: 0 }
);

//! display the name and skills of emp who are having only 4 skills
db.emp.find({ skills: { $size: 4 } }, { empName: 1, skills: 1, _id: 0 });

db.dummy2.insertMany([
  {
    _id: 1,
    results: [
      { product: "abc", score: 10 },
      { product: "xyz", score: 5 },
      { product: "pqr", score: 6 },
    ],
  },
  {
    _id: 2,
    results: [
      { product: "abc", score: 8 },
      { product: "xyz", score: 7 },
      { product: "def", score: 4 },
    ],
  },
  {
    _id: 3,
    results: [
      { product: "abc", score: 7 },
      { product: "xyz", score: 8 },
      { product: "def", score: 9 },
    ],
  },
]);

//& find all the documents in which product pqr is present
db.dummy2.find({ results: { $elemMatch: { product: "pqr" } } }, { _id: 0 });

//& find all the documents in which product def is present and score should be greater than 5
db.dummy2.find({
  results: { $elemMatch: { product: "def", score: { $gt: 5 } } },
});

// db.employees.find(
//   { dependents: { $elemMatch: { relation: "Son" } } },
//   { dependents: 1 }
// );

//& find all the emp details who are having skills as either sql or react(if sql is preset-->print or if react is present-->print)
db.emp.find({ skills: { $in: ["sql", "react"] } }, { skills: 1, _id: 0 });

//~ ================= element operators =============================================================

//? $type --> it fetches all the documents which matches the given type
//& syntax --> { fieldName: { $type: "alias" } }
// alias -> "string", "number", "bool", "array", etc..
db.emp.find({ sal: { $type: "string" } });

//? $exists --> it fetches the documents which matches the given fieldName
//& filter part --> {fieldName: {$exists: true/false}}
// if set to true --> fetches the documents which contains the fieldName
// if set to false --> fetches the documents which does not contain the fieldName
db.emp.find(
  { isMarried: { $exists: false } },
  { empName: 1, isMarried: 1, _id: 0 }
);

//~ ================================== evaluation op =================================
//? $regex --> it fetches the documents which matches the given pattern. this only works on string
//& filter part == { fieldName: { $regex: /pattern/ } }
//? regular expression --> regex

//? $expr (expression) --> it helps us to compare between two fields of a single document, also it allows us to write aggregation queries

//! Find all employees whose empName contains letter "m" (pattern matching)
db.emp.find({ empName: { $regex: /m/ } }, { empName: 1, _id: 0 });

//~ cap symbol (^: shift+ 6) --> using this we can compare the starting of the string
//~ dollar symbol ($: shift+4) --> using this we can compare the end of the string
//~ dot symbol (.) --> using dot we can skip one character

//! Find all employees whose empName contains first letter "m" (pattern matching)
db.emp.find({ empName: { $regex: /^m/ } }, { empName: 1, _id: 0 });

//! Find all employees whose empName last letter is "s" (pattern matching)
db.emp.find({ empName: { $regex: /s$/ } }, { empName: 1, _id: 0 });

//! Find all employees whose second letter is "o" (pattern matching)
db.emp.find({ empName: { $regex: /^.o/ } }, { empName: 1, _id: 0 });

//! Find all employees whose third last letter is "l" (pattern matching)
db.emp.find({ empName: { $regex: /l..$/ } }, { empName: 1, _id: 0 });

//! find all emp who are having exactly 4 letters in their name
db.emp.find({ empName: { $regex: /^....$/ } }, { empName: 1, _id: 0 });

// ============================================
// MONGODB OPERATORS PRACTICE QUESTIONS
// Collections: emp.dept & emp.emp
// ============================================

// ============================================
// ARRAY OPERATORS ($size, $all, $elemMatch, $in, $nin)
// ============================================

// 1. Find all employees who have exactly 3 skills

// 2. Find all employees who have exactly 4 skills

// 3. Find all employees who have more than 2 skills (use $expr with $size)

// 4. Find all employees who have both "sql" and "python" skills

// 5. Find all employees who have both "html" and "java" skills

// 6. Find all employees working on both "project_alpha" and "research_initiative"

// 7. Find departments that have both "conference_room" and "printer" facilities

// 8. Find departments with exactly 2 facilities

// 9. Find departments with exactly 3 facilities

// 10. Find employees whose job is either "manager" or "analyst"

// 11. Find employees from cities: "Chicago", "Dallas", or "New York"

// 12. Find employees with education level "master", "phd", or "mba"

// 13. Find departments NOT located in "boston" or "chicago"

// 14. Find employees whose job is NOT "clerk" or "salesman"

// 15. Find employees who have skills in "java", "python", or "c++"

// 16. Find all employees who do NOT have "sql" in their skills array

// 17. Find employees working on exactly 1 project

// 18. Find employees working on exactly 2 projects

// 19. Find employees with performance rating greater than 4.0 (use $elemMatch concept with embedded doc)

// 20. Find all employees who have "leadership" OR "management" in their skills

// ============================================
// ELEMENT OPERATORS ($exists, $type)
// ============================================

// 21. Find all employees who have an "incentive" field

// 22. Find all employees who do NOT have an "incentive" field

// 23. Find all departments where "headOfDept" field exists

// 24. Find all departments where "headOfDept" is null

// 25. Find employees where "mgr" field exists and is not null

// 26. Find employees where "comm" is 0 (commission is zero)

// 27. Find employees where "havingInsurance" field exists

// 28. Find employees where "havingInsurance" does not exist

// 29. Find all employees where "skills" is an array type

// 30. Find all employees where "age" is a number type

// 31. Find departments where "budget" exists

// 32. Find employees where "totalHoursWorked" exists and is greater than 2000

// 33. Find all employees who have a "city" field

// 34. Find departments where "isActive" field exists

// 35. Find employees where "bonus" field exists and is greater than 1000

// ============================================
// EVALUATION OPERATORS ($regex, $expr, $mod, $where)
// ============================================

// 36. Find all employees whose name starts with "m" (case insensitive)

// 37. Find all employees whose name ends with "n" (case insensitive)

// 38. Find all employees whose name contains "ar" (case insensitive)

// 39. Find departments whose name contains "sales" (case insensitive)

// 40. Find departments whose location starts with "new" (case insensitive)

// 41. Find employees whose city name ends with "go" (Chicago)

// 42. Find employees where salary is greater than bonus (use $expr)

// 43. Find employees where totalHoursWorked is greater than 2000 (use $expr)

// 44. Find departments where budget is greater than 150000 (use $expr)

// 45. Find employees where (sal + bonus) is greater than 3000 (use $expr)

// 46. Find employees where comm is greater than bonus (use $expr)

// 47. Find employees whose empNo is divisible by 2 (use $mod)

// 48. Find departments whose deptNo is divisible by 10 (use $mod)

// 49. Find employees where age multiplied by 100 is less than salary (use $expr)

// 50. Find all employees whose job title contains "man" (manager, salesman)

// ============================================
// COMBINED OPERATORS (Mix of Array, Element, Evaluation)
// ============================================

// 51. Find employees with exactly 2 skills AND salary greater than 2000

// 52. Find employees who have "python" skill AND work remotely (isRemote: true)

// 53. Find employees who DON'T have insurance AND salary is less than 1500

// 54. Find departments with more than 2 facilities AND budget greater than 150000

// 55. Find employees whose name starts with "s" OR ends with "d"

// 56. Find employees with incentive field AND commission greater than 0

// 57. Find employees working in dept 20 or 30 AND have "sql" skill

// 58. Find all managers or analysts with performance rating above 4.5

// 59. Find employees with exactly 3 projects AND education is "master" or "phd"

// 60. Find departments where employeeCount is greater than 3 AND isActive is true
