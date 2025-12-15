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
//! indexing, replication, sharding (theory)

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
db.emp.find({ sal: { $gt: 1400 }, job: "clerk" }, { sal: 1, job: 1, _id: 0 });
//? this will return the documents who are clerk and are having salary greater than 1400

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

db.emp.find({ results: { $elemMatch: { product: "def" } } });

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
//& filter part --> { $expr: { $op: [v1, v2] } }

//? $mod --> modulus (even or odd)
//& filter part --> { fieldName: { $mod: [divisor, remainder] } }

//? $where --> not used (slow)

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

//~ ========================================================

let a = 10;

//! find all the emp names who are having age greater than deptNo
db.emp.find(
  { $expr: { $lt: ["$age", "$deptNo"] } },
  { age: 1, empName: 1, deptNo: 1, _id: 0 }
);
//~ whenever we are passing documents fields as value, 1) use double quotes 2) prefix it with $

//! find all the empNames who were hired in the month of Jan. ($month)
db.emp.find(
  {
    $expr: { $eq: [{ $month: "$hireDate" }, 1] },
  },
  { empName: 1, hireDate: 1, _id: 0 }
);

db.emp.aggregate([
  {
    $addFields: {
      month: { $month: "$hireDate" },
    },
  },
  {
    $match: {
      month: 2,
    },
  },
]);

//! find all the emp who are getting salary multiple of 100
db.emp.find({ salary: { $mod: [100, 0] } }, { salary: 1, _id: 0 });

//~ ==================== update operators =============================
// 1) update existing value
// 2) update existing key
// 3) add a new key value pair
// 4) remove a key value pair
//~ 1) <<<<<<<<<<<<<<<< field update operators >>>>>>>>>>>>>>>>>>>>>>>

//? $set --> it is used to update existing value or to add a new key value pair
//& syntax -> updation part --> { $set: { field1: value1, f2:v2, .... } }
// it will update the value if the key is present, if not then a new key value pair will be added

//? $unset --> it is used to remove a key value pair
// updation part --> { $unset: { f1:truthy values, f2:"", f3:"newName"} }

//? $rename --> it is used to rename a key
// updation part --> { rename: {oldKey: "newKey"} }

//! Add a new field "lastPromotionDate" with current date to employee "smith"
db.emp.updateOne(
  { empNo: 7369 },
  {
    $set: {
      "performance.lastReviewDate": new Date(),
      "performance.lastPromotionDate": new Date(),
      isMarried: true,
    },
  }
);

db.emp.updateOne({ empNo: 7369 }, { $unset: { isMarried: "" } });

db.emp.updateMany({}, { $rename: { empName: "name" } });

//~ 2) arithmetic update op (max, min, inc, etc..)
//? $max --> update field with maximum value (greater than current value)
// updation part --> {$max: {key: value}} (value should be strictly greater than the stored value)

db.products.updateOne({ title: "Mi 11X Pro" }, { $max: { totalStock: 40 } });

//? $min --> update field with minimum value (lesser than current value)
// updation part --> {$min: {key: value}} (value should be strictly lesser than the stored value)

//& if the field is not present then it will we added with the given value
db.products.updateOne({ title: "Mi 11X Pro" }, { $max: { likes: 40 } });

//? $inc --> it is used to increment/decrement value
// updation part --> {$inc: {key: value}} (value can be positive or negative integer)
//& if the field is not present then it will we added with the given value
//& with $inc, null cannot be used
db.products.updateOne({ title: "Mi 11X Pro" }, { $inc: { key1: -30 } });

//~ array update op (push, pull, etc..)

//? $push --> is is used to add element to the array
//& syntax --> { $push: { key: value } } (if the key is present then element will be added to the array otherwise a new array will be created, every element gets inserted at the end of the array)
db.dummy.updateOne({}, { $push: { hobbies: ["music", "football"] } }); // using push if we insert multiple values then a nested array will be created

//? $push + $each ($position, $slice, $sort are known as modifiers) --> it is used to add single/multiple elements to the array without creating nested array
//& syntax --> {$push: { key: { $each: [v1, v2, v3,......] } }}
db.dummy.updateOne(
  {},
  { $push: { hobbies: { $each: ["music", "football"] } } }
);

// $position --> if we want to insert elements at a specif position
db.dummy.updateOne(
  {},
  { $push: { hobbies: { $each: ["cooking", "reading"], $position: 2 } } }
);

// $slice --> if we want to display only few elements
db.dummy.updateOne(
  {},
  { $push: { hobbies: { $each: ["gaming"], $position: 2, $slice: 3 } } }
);

// sort -->
db.dummy.updateOne(
  {},
  { $push: { hobbies: { $each: ["music"], $position: 2, $sort: -1 } } }
);
// -1 is for arranging in descending order
// 1 is for arranging in ascending order

//? $addToSet --> it is used to add unique elements to the array and we cannot use modifiers wit $addToSet
db.dummy.updateOne(
  {},
  { $addToSet: { hobbies: { $each: ["music", "dancing"] } } }
);
db.dummy.updateOne({}, { $addToSet: { hobbies: "music" } });

//? $pop --> it is used to remove element from either first or last
db.dummy.updateOne({}, { $pop: { hobbies: 1 } }); // removes from end
db.dummy.updateOne({}, { $pop: { hobbies: -1 } }); // removes from start

//? $pull --> it is used to remove all elements which matches the condition/literal
db.collection_name.updateOne({}, { $pull: { key: { condition } } });
db.dummy.updateOne({}, { $pull: { hobbies: { $regex: /ing$/ } } });

//? $pullAll --> it is used to remove all elements which matches the literal values
db.dummy.updateOne({}, { $pullAll: { hobbies: ["cricket", "swim"] } });

db.dummy.updateOne({}, { $push: { hobbies: "cricket" } });

// let hobbies = ["cricket", "singing", ["music", "football"]];
let hobbies = ["cricket", "singing", "music", "football"]; // (using $each)

//! add communication skills to all the managers present
db.emp.updateMany(
  { job: "manager" },
  { $addToSet: { skills: "communication" } }
);

//? $(positional operators )

db.dummy.updateOne({ hobbies: "music" }, { $set: { hobbies: ["h1", "h2"] } });

db.exp.insertMany([
  {
    name: "varun",
    exp: [
      { name: "google" },
      { name: "abc", duration: 6 },
      { name: "itc", duration: 15 },
    ],
  },
  {
    name: "varun",
    exp: [
      { name: "google", duration: 12 },
      { name: "abc", duration: 6 },
      { name: "itc", duration: 13 },
    ],
  },
  {
    name: "ashwin",
    exp: [
      { name: "accenture", duration: 5 },
      { name: "yahoo", duration: 6 },
      { name: "asus", duration: 4 },
    ],
  },
  {
    name: "sirisha",
    exp: [
      { name: "google", duration: 3 },
      { name: "infosys", duration: 15 },
      { name: "itc", duration: 16 },
    ],
  },
]);

//? 1)  update first matched occurrence  -> $
//? 2)  update all the documents --> $[]
//? 3)  update only the matched occurrence --> $[e]

//? $ --> this will update only the first matched occurrence
db.exp.updateMany(
  {
    exp: { $elemMatch: { duration: { $gte: 12 } } },
  },
  { $set: { "exp.$.bonus": 100 } }
);

//? $[] --> this will update all the documents
db.exp.updateMany(
  {
    exp: { $elemMatch: { duration: { $gte: 12 } } },
  },
  { $set: { "exp.$[].newJoinee": true } }
);

//? $[e] --> it will update all the matched occurrence
db.exp.updateMany(
  {
    exp: { $elemMatch: { duration: { $gte: 12 } } },
  },
  { $set: { "exp.$[e].incentive": 10000 } },
  {
    arrayFilters: [{ "e.name": "infosys" }],
  }
);

db.actors.insertOne({
  name: "ayushman",
  age: 39,
  _id: "ID2",
});

db.movies.insertOne({
  name: "thama",
  runtime: 139,
  actors: "ID2",
});

// db.movies.aggregate([
//   {
//     $lookup: {
//       from: "actors",
//       foreignField: "_id",
//       localField: "actors",
//       as: "actors",
//     },
//   },
// ])

db.createCollection("info", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "phone"],
      properties: {
        name: {
          bsonType: "string",
          message: "name is required and should be a string",
        },
        age: {
          bsonType: "number",
        },
        phone: {
          bsonType: "string",
        },
      },
    },
  },
});

// ============================================
// MONGODB ARRAY UPDATE OPERATORS PRACTICE QUESTIONS
// Collections: emp.dept & emp.emp
// ============================================

// ============================================
// $push OPERATOR (Add elements to array)
// ============================================

// 1. Add a new skill "mongodb" to employee "smith"

// 2. Add a new project "mobile_app" to employee "allen"

// 3. Add facility "parking_lot" to department 10

// 4. Add skill "docker" to employee "jones"

// 5. Add project "cloud_migration" to employee "king"

// 6. Add facility "security_desk" to department 20

// 7. Add skill "kubernetes" to employee "scott"

// 8. Add a new project "api_development" to employee "ward"

// 9. Add facility "recreation_room" to all active departments

// 10. Add skill "typescript" to all employees in department 30

// ============================================
// $push with $each (Add multiple elements)
// ============================================

// 11. Add multiple skills ["angular", "vue", "svelte"] to employee "turner"

// 12. Add multiple projects ["project_beta", "project_gamma"] to employee "blake"

// 13. Add multiple facilities ["elevator", "emergency_exit"] to department 30

// 14. Add skills ["nodejs", "express", "nestjs"] to employee "adams"

// 15. Add projects ["security_audit", "compliance_review"] to employee "clark"

// 16. Add facilities ["water_cooler", "vending_machine"] to department 10

// 17. Add skills ["aws", "azure", "gcp"] to all managers

// 18. Add projects ["training_program", "onboarding_system"] to employee "ford"

// 19. Add multiple skills ["git", "jenkins", "ci/cd"] to employee "miller"

// 20. Add facilities ["bike_rack", "locker_room"] to all departments with budget > 150000

// ============================================
// $push with $each and $position (Insert at specific position)
// ============================================

// 21. Add skill "leadership" at the beginning (position 0) of skills array for employee "jones"

// 22. Add project "priority_project" at position 0 for employee "king"

// 23. Add facility "reception" at the beginning of facilities for department 20

// 24. Add skill "problem_solving" at position 1 in skills array for employee "scott"

// 25. Add project "urgent_fix" at position 0 for all analysts

// ============================================
// $push with $each and $slice (Limit array size)
// ============================================

// 26. Add skill "graphql" to employee "ward" and keep only last 5 skills (use $slice: -5)

// 27. Add project "new_feature" to employee "martin" and keep only last 3 projects

// 28. Add facility "storage_new" to department 40 and keep only first 2 facilities (use $slice: 2)

// 29. Add skill "solidity" to employee "adams" and keep only last 4 skills

// 30. Add project "optimization" to employee "blake" and keep only last 4 projects

// ============================================
// $push with $each and $sort (Sort array after insertion)
// ============================================

// 31. Add skill "animation" to employee "allen" and sort all skills alphabetically (use $sort: 1)

// 32. Add project "analytics_dashboard" to employee "scott" and sort projects in descending order

// 33. Add facility "auditorium" to department 20 and sort facilities alphabetically

// 34. Add skill "testing" to employee "turner" and sort skills in ascending order

// 35. Add multiple skills ["redis", "kafka"] to employee "ford" and sort all skills

// ============================================
// $push with $each, $position, $slice, $sort COMBINED
// ============================================

// 36. Add "team_lead" skill at position 0 to "jones", keep last 6 skills, and sort them

// 37. Add projects ["refactoring", "documentation"] at position 0 to "clark", keep last 5, sort them

// 38. Add facility "innovation_lab" to dept 20 at position 1, keep last 4 facilities, sort them

// ============================================
// $addToSet OPERATOR (Add only if not exists - no duplicates)
// ============================================

// 39. Add skill "python" to employee "clark" only if it doesn't already exist

// 40. Add project "project_alpha" to employee "jones" only if not already present

// 41. Add facility "conference_room" to department 10 only if it doesn't exist

// 42. Add skill "sql" to employee "smith" only if not present (avoid duplicates)

// 43. Add project "sales_campaign_q1" to employee "blake" only if not already added

// 44. Add facility "printer" to all departments, but only if they don't have it already

// 45. Add skill "html" to all employees in dept 30, avoiding duplicates

// ============================================
// $addToSet with $each (Add multiple unique elements)
// ============================================

// 46. Add skills ["react", "angular", "vue"] to employee "ward" avoiding duplicates

// 47. Add projects ["audit_2024", "compliance_check"] to employee "king" without duplicates

// 48. Add facilities ["first_aid", "fire_extinguisher"] to dept 30 avoiding duplicates

// 49. Add skills ["agile", "scrum", "kanban"] to all managers without creating duplicates

// 50. Add projects ["code_review", "peer_testing"] to all analysts avoiding duplicates

// ============================================
// $pull OPERATOR (Remove specific elements from array)
// ============================================

// 51. Remove skill "html" from employee "jones"

// 52. Remove project "data_entry" from employee "james"

// 53. Remove facility "storage" from department 40

// 54. Remove skill "sql" from employee "smith"

// 55. Remove project "web_portal" from employee "turner"

// 56. Remove facility "loading_dock" from all departments

// 57. Remove skill "excel" from all clerks

// 58. Remove project "sales_campaign_q1" from all employees in dept 30

// 59. Remove facility "coffee_machine" from department 10

// 60. Remove skill "powerpoint" from employee "martin"

// ============================================
// $pull with conditions (Remove based on criteria)
// ============================================

// 61. Remove all skills that start with "html" from employee "clark"

// 62. Remove all projects containing "sales" in name from employee "blake"

// 63. Remove facilities starting with "old_" from all departments

// 64. Remove all skills with length less than 3 characters from employee "adams"

// 65. Remove projects that end with "_q1" from all salesmen

// ============================================
// $pullAll OPERATOR (Remove multiple specific values)
// ============================================

// 66. Remove skills ["sql", "excel"] from employee "james"

// 67. Remove projects ["sales_campaign_q1", "sales_campaign_q2"] from employee "allen"

// 68. Remove facilities ["storage", "loading_dock"] from department 40

// 69. Remove skills ["html", "css", "javascript"] from employee "miller"

// 70. Remove multiple projects ["project_alpha", "research_initiative"] from employee "smith"

// 71. Remove facilities ["printer", "coffee_machine"] from department 10

// 72. Remove skills ["blockchain", "ai"] from all employees in dept 20

// ============================================
// $pop OPERATOR (Remove first or last element)
// ============================================

// 73. Remove the last skill from employee "turner" (use $pop: 1)

// 74. Remove the first project from employee "blake" (use $pop: -1)

// 75. Remove the last facility from department 20 (use $pop: 1)

// 76. Remove the first skill from employee "clark" (use $pop: -1)

// 77. Remove the last project from all analysts (use $pop: 1)

// 78. Remove the first facility from department 30 (use $pop: -1)

// 79. Remove the last skill from all employees with more than 3 skills

// 80. Remove the first project from employee "king" (use $pop: -1)

// ============================================
// $ POSITIONAL OPERATOR (Update first matching array element)
// ============================================

// 81. Employee "clark" has ["java", "python", "html", "accounting"]. Change "python" to "python3"
//     Find by skills: "python" and update that specific element

// 82. Employee "turner" has multiple skills. Update the first occurrence of "javascript" to "javascript_es6"

// 83. Department 20 has facilities array. Update first "conference_room" to "conference_room_A"

// 84. For employee "jones", update the project "project_alpha" to "project_alpha_v2"

// 85. Update first skill "sql" to "postgresql" for employee "smith"

// ============================================
// $[] ALL POSITIONAL OPERATOR (Update all array elements)
// ============================================

// 86. Convert all skills to uppercase for employee "adams" (use $toUpper with $[])

// 87. Add "_completed" suffix to all projects for employee "martin"

// 88. Add "_zone" suffix to all facilities in department 30

// 89. Prepend "skill_" to all skills for employee "james"

// 90. Append "_2024" to all projects for employee "ford"

// ============================================
// $[element] FILTERED POSITIONAL (Update specific array elements matching criteria)
// ============================================

// 91. Employee "clark" has skills ["java", "python", "html", "accounting"]
//     Update all skills that have length > 5 characters to add "_advanced" suffix
//     Use arrayFilters

// 92. For employee "blake", update all projects that contain "sales" to add "_priority" suffix
//     Use arrayFilters with $regex

// 93. Update all facilities in dept 20 that start with "conference" to add "_renovated" suffix

// 94. For employee "turner", update all skills that match ["javascript", "html", "php"] to add "_v2"

// 95. Update all projects for "jones" that don't contain "alpha" to add "_archived" suffix

// ============================================
// COMPLEX ARRAY UPDATE SCENARIOS
// ============================================

// 96. Add "expert_" prefix to all skills for managers with performance rating > 4.0

// 97. Remove "sales_campaign_q1" from all employees and add "sales_campaign_q4" instead

// 98. For all remote employees, add skills ["remote_collaboration", "zoom"] avoiding duplicates

// 99. Add facility "solar_panel" to all departments with budget > 180000 at position 0

// 100. Remove last 2 skills from employees who have more than 5 skills (use $slice)

// 101. Add project "year_end_review" to all employees, keep only last 4 projects sorted alphabetically

// 102. For dept 10, remove all facilities and add new ones ["modern_office", "smart_board", "lounge"]

// 103. Update all skills containing "sql" to "sql_certified" for employees with insurance

// 104. Add "urgent" tag to first project of all employees with performance rating < 3.5

// 105. Remove skills ["html", "css"] from all employees and add ["react", "nextjs"] without duplicates

let b = 10;

//! data modelling --> it is the process of structuring data in a way that is easy to manage and query. (1) how data is stored (2)--> what is the relation bw the data (embed and reference)

/* 
Embedded Documents (Denormalization)
  “Embedded documents refer to the practice of storing related data inside a parent document. The guiding idea is: store together what is queried together.”

When to use Embedded Documents
  When the relationship is one-to-few
  When the related data is frequently read together
  When the embedded data rarely changes independently
  When atomic updates are needed

Example:
{
  "_id": 1,
  "name": "Aman",
  "orders": [
    { "orderId": 101, "amount": 499 },
    { "orderId": 102, "amount": 299 }
  ]
}

Pros
  Single document reads (very fast)
  Fewer queries and no joins
  Atomic updates within the same document

Cons
  Document can grow too large (16MB limit)
  Hard to manage if the embedded array grows endlessly
*/

/* 
References (Normalization / Linking)
  “In references, related data is stored in separate collections but connected through ObjectId fields. This is similar to foreign keys in relational databases.”

When to use References
  When the relationship is one-to-many (large) or many-to-many
  When data needs separate lifecycle management
  When the related data is updated frequently
  When duplication will cause inconsistency

Example:
 
User Collection:
{
  "_id": 1,
  "name": "Aman",
  "departmentId": ObjectId("abc123")
}

Department Collection:
{
  "_id": "abc123",
  "name": "Engineering"
}

Pros
  No document size limitation
  Clean and scalable structure
  Reduces duplication

Cons
  Requires multiple queries or $lookup joins
  Slightly slower for read-heavy operations
*/

/* 
{
  name: "abc",
  age: 34,
  isMarried: false,
  skills: ["123"],
}
*/

db.createCollection("info", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "isMarried", "skills"],
      properties: {
        name: {
          bsonType: "string",
          description: "name is required and should be a string",
        },
        age: {
          bsonType: "int",
          description: "age is required and should be a number",
        },
        isMarried: {
          bsonType: "bool",
        },
        skills: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
        },
      },
    },
  },
});

db.info.insertOne({
  name: "abc",
  age: 34,
  isMarried: false,
  skills: ["123"],
  email: "abc",
});

//! for oject --> define properties
//~ for array --> define items

/* 
{
  age:int,
  address:{
      city:string,
      pincode:string
    },
  skills:[{game:string, max:int}]
}
*/

db.createCollection("info2", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["age", "address", "score"],
      properties: {
        age: {
          bsonType: "int",
          description: "age is reburied and should be a number",
        },
        address: {
          bsonType: "object",
          required: ["city", "pincode"],
          properties: {
            city: {
              bsonType: "string",
            },
            pincode: {
              bsonType: "string",
            },
          },
        },
        score: {
          bsonType: "array",
          items: {
            bsonType: "object",
          },
        },
      },
    },
  },
});

//! display all the emp names
db.emp.find({}, { name: 1, _id: 0 });

//! display all the emp names in ascending order
db.emp.find({}, { name: 1, _id: 0 }).sort({ name: -1 });

//! display all the emp names and salary who is having max salary
db.emp.find({}, { name: 1, salary: 1, _id: 0 }).sort({ salary: -1 }).limit(1);

//! display all the emp names and salary who is having lowest salary
db.emp.find({}, { name: 1, salary: 1, _id: 0 }).sort({ salary: 1 }).limit(1);

//! display all the emp names and salary who is having second highest salary
db.emp
  .find({}, { name: 1, salary: 1, _id: 0 })
  .sort({ salary: -1 })
  .skip(1)
  .limit(1);

//! display all the emp names and salary who is having third lowest salary
db.emp
  .find({}, { name: 1, salary: 1, _id: 0 })
  .sort({ salary: 1 })
  .skip(2)
  .limit(1);

db.emp.find(); //? (filter, projection, sort, skip, limit)
// db.emp.aggregate(); ==> using aggregate() we can only fetch

//! display all the emp details who are working as clerk
db.emp.aggregate([
  {
    $match: { job: "clerk" }, // stage1
  },
]);

//! display all the emp names and hireDate who are working as clerk
db.emp.aggregate([
  {
    //s1
    $match: {
      job: "clerk",
    },
  },
  {
    $project: {
      name: 1,
      hireDate: 1,
      _id: 0,
    },
  }, //s2
]);

db.emp.aggregate([
  {
    $project: {
      name: 1,
      hireDate: 1,
      job: 1,
      _id: 0,
    },
  }, //s2
  {
    //s1
    $match: {
      job: "clerk",
    },
  },
]);

// 1. Find all employees with salary greater than 2000
db.emp.aggregate([
  {
    $match: {
      salary: { $gt: 2000 },
    },
  },
]);

// 2. Find all employees working in department 20 or 30
db.emp.aggregate([
  {
    $match: {
      deptNo: { $in: [10, 20] },
    },
  },
]);

//! display all the emp names as username who are working as clerk
db.emp.aggregate([
  {
    $match: { job: "clerk" }, // stage1
  },
  {
    $project: {
      "user name": "$name",
      _id: 0,
    },
  },
]);

//! Show employee name and whether salary > 2000 (boolean field)
db.emp.aggregate([
  {
    $project: {
      name: 1,
      isSalGt: { $gt: ["$salary", 2000] },
      _id: 0,
      salary: 1,
    },
  },
]);

// Count total number of employees in each department
db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      numberOfEmp: { $sum: 1 },
      maxSal: { $max: "$salary" },
      minSal: { $min: "$salary" },
      maxAge: { $max: "$age" },
      minAge: { $min: "$age" },
      totalSalary: { $sum: "$salary" },
    },
  },
  {
    $project: {
      departmentNumber: "$_id",
      _id: 0,
      numberOfEmp: 1,
      minAge: 1,
      maxAge: 1,
      minSal: 1,
      maxSal: 1,
      totalSalary: 1,
    },
  },
]);

// Count total employees by city
db.emp.aggregate([
  {
    $group: {
      _id: "$city",
      count: { $sum: 1 },
    },
  },
  {
    $project: {
      city: "$_id",
      count: 1,
      _id: 0,
    },
  },
]);

// Count total employees by city along with that show their names and job titles
db.emp.aggregate([
  {
    $group: {
      _id: "$city",
      count: { $sum: 1 },
      employeeID: { $push: "$_id" },
      job: { $push: "$job" },
      jobWithUniqueValues: { $addToSet: "$job" },
    },
  },
  {
    $project: {
      city: "$_id",
      count: 1,
      _id: 0,
      name: 1,
      job: 1,
      jobWithUniqueValues: 1,
    },
  },
]);

//! Count employees with and without insurance
db.emp.aggregate([
  {
    $group: {
      _id: "$havingInsurance",
      count: { $sum: 1 },
    },
  },
  {
    $project: {
      havingInsurance: "$_id",
      count: 1,
      _id: 0,
    },
  },
]);

//! display all the emp names in ascending order.
db.emp.aggregate([
  // {name:"", agee:"", ..........}
  {
    $project: {
      name: 1,
      _id: 0,
    },
  }, // s1
  {
    $sort: { name: 1 }, // {name:"smith"}, {name:"allen"}
  }, // s2
]);

// db.emp.find().explain("executionStats");

//! 43. Sort employees first by department, then by salary descending
db.emp.aggregate([
  {
    $sort: {
      deptNo: 1,
      salary: -1,
    },
  },
  {
    $project: {
      salary: 1,
      deptNo: 1,
      _id: 0,
    },
  },
]);

//! display the emp who is having maximum salary
db.emp.aggregate([
  {
    $sort: {
      salary: -1,
    },
  },
  {
    $limit: 1,
  },
]);

db.emp.aggregate([
  {
    $sort: {
      salary: -1,
    },
  },
  { $skip: 2 },
  { $limit: 1 },
  {
    $project: {
      name: 1,
      salary: 1,
      _id: 0,
    },
  },
]);

let arr = [
  { salary: 5000, name: "king" },
  { salary: 3000, name: "scott" },
  { salary: 3000, name: "ford" },
  { salary: 2975, name: "jones" },
  { salary: 2850, name: "blake" },
  { salary: 2450, name: "clark" },
  { salary: 1600, name: "allen" },
  { salary: 1500, name: "turner" },
  { salary: 1300, name: "miller" },
  { salary: 1250, name: "ward" },
  { salary: 1250, name: "martin" },
  { salary: 1100, name: "smith" },
  { salary: 1100, name: "adams" },
];

//! display the emp who is having third highest salary
db.emp.aggregate([
  {
    $group: {
      _id: "$salary",
      names: { $push: "$name" },
    },
  },
  { $sort: { _id: -1 } },
  { $skip: 2 },
  { $limit: 1 },
  { $unwind: "$names" },
  {
    $project: { thirdHighestSalary: "$_id", names: 1, _id: 0 },
  },
]);

//! emp --< local collection
//! dept --< foreign collection

db.emp.aggregate([
  {
    $lookup: {
      from: "dept", // collection to join
      localField: "deptNo", // field from the input documents
      foreignField: "deptNo", // field from the documents of the "from" collection
      as: "departmentDetails",
    },
  },
]);

//
// // 86. Group employees into salary ranges: 0-1500, 1500-3000, 3000+
// db.emp.aggregate([
//   {
//     $bucket: {
//       groupBy: "$salary",
//       boundaries: [0, 1500, 3000],
//       default: "Other",
//       output: {
//         count: { $sum: 1 },
//         employees: { $push: "$name" },
//       },
//     },
//   },
// ]);

// // Auto-bucket employees into 3 groups by salary
// db.emp.aggregate([
//   {
//     $bucketAuto: {
//       groupBy: "$salary",
//       buckets: 3,
//       output: {
//         count: { $sum: 1 },
//         employees: { $push: "$name" },
//       },
//     },
//   },
// ]);

//! user collction
let c = 10;

//!  users collection
let e1 = {
  name: "",
  age: "",
  contact: "c1",
};
let e2 = {
  name: "",
  age: "",
  contact: "c2",
};

//! contact
let c1 = {
  _id: "c1",
  email: "",
  phone: "",
};
let c2 = {
  _id: "c2",
  email: "",
  phone: "",
};

db.contacts.insertMany([
  {
    _id: "c1",
    email: "test@gamil.com",
    phone: "1234567890",
    user: "u1",
  },
  {
    _id: "c2",
    email: "demo@gmail.com",
    phone: "0987654321",
    user: "u2",
  },
]);

db.users.insertMany([
  {
    _id: "u1",
    name: "test",
    age: "34",
    contact: "c1",
  },
  {
    _id: "u2",
    name: "demo",
    age: "34",
    contact: "c2",
  },
]);

db.users.aggregate([
  {
    $lookup: {
      from: "contacts",
      localField: "contact",
      foreignField: "_id",
      as: "conDetails",
    },
  },
]);

//! user --> contact
//! contact --> users

db.contacts.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "contact",
      as: "_id",
    },
  },
]);

//! show the complete details of user whose name is "test"
db.users.aggregate([
  { $match: { name: "test" } },
  {
    $lookup: {
      from: "contacts",
      localField: "contact",
      foreignField: "_id",
      as: "contact",
    },
  },
]);

/* 
[
 let obj = {
    _id: 'u1',
    name: 'test',
    age: '34',
    contact: 
      {
        _id: 'c1',
        email: 'test@gamil.com',
        phone: '1234567890',
        user: 'u1'
      }
    
  }
]

*/

//! show only name, age and email of user whose name is "test"
db.users.aggregate([
  { $match: { name: "test" } },
  {
    $lookup: {
      from: "contacts",
      localField: "contact",
      foreignField: "_id",
      as: "contact",
    },
  },
  { $unwind: "$contact" },
  {
    $project: {
      name: 1,
      age: 1,
      email: "$contact.email",
      _id: 0,
    },
  },
]);

//! For each department, show all employee names and budget of the department they are working there
//? number of stages --> 2(lookup, project)
db.dept.aggregate([
  {
    $lookup: {
      from: "emp",
      localField: "deptNo",
      foreignField: "deptNo",
      as: "empDetails",
    },
  },
  { $unwind: "$deptNo" },
  {
    $project: { budget: 1, "empDetails.name": 1 },
  },
]);

//!
// 55. Join employees with departments and show only matching records

//! display total number of emp in each job long with facilities and location whose name contains letter "a"
//? stages --> filter, group, lookup ,project (4 stages)

db.emp.aggregate([
  {
    $match: {
      name: {
        $regex: /a/,
      },
    },
  },
  {
    $lookup: {
      from: "dept",
      localField: "deptNo",
      foreignField: "deptNo",
      as: "deptNo",
    },
  },
  {
    $unwind: {
      path: "$deptNo",
    },
  },
  {
    $group: {
      _id: "$job",
      count: {
        $sum: 1,
      },
      deptDetails: {
        $addToSet: "$deptNo",
      },
    },
  },
  {
    $unwind: {
      path: "$deptDetails",
    },
  },
  {
    $project: {
      count: 1,
      job: "$_id",
      _id: 0,
      facilities: "$deptDetails.facilities",
      location: "$deptDetails.loc",
    },
  },
]);

// /?! . Add a field "annualSalary" (salary * 12) to all employees
// hello --> greet

db.emp.aggregate([
  {
    $addFields: {
      annualSal: { $multiply: ["$salary", 12] },
    },
  },
]);

//! find total salary given to each employee
db.emp.aggregate([
  {
    $addFields: {
      annualSal: { $multiply: ["$salary", 12] },
    },
  },
  {
    $addFields: {
      totalSal: {
        $add: ["$annualSal", "$comm", "$incentive", "$bonus"],
      },
    },
  },
]);

db.emp.aggregate([
  {
    $addFields: {
      annualSal: { $multiply: ["$salary", 12] },
    },
  },
  {
    $addFields: {
      totalSal: {
        $add: [
          "$annualSal",
          { $ifNull: ["$comm", 0] },
          { $ifNull: ["$bonus", 0] },
          { $ifNull: ["$incentive", 0] },
        ],
      },
    },
  },
  {
    $group: {
      _id: "$totalSal",
      sum: { $sum: "$totalSal" },
    },
  },
]);

//! show the total salary given to all the emp --> use $group
db.emp.aggregate([
  {
    $group: {
      _id: null,
      totalSal: { $sum: "$salary" },
      count: { $sum: 1 },
    },
  },
]);

db.emp.aggregate([
  {
    $addFields: {
      year: { $year: "$hireDate" },
      month: { $month: "$hireDate" },
      day: { $dayOfMonth: "$hireDate" },
    },
  },
  {
    $project: { year: 1, hireDate: 1, _id: 0, month: 1, day: 1 },
  },
]);

// Add field "experienceYears" (current year - hire year)
// year - hiredYear

db.emp.aggregate([
  {
    $addFields: {
      year: { $year: "$hireDate" },
    },
  },
  {
    $addFields: {
      expYears: { $subtract: [{ $year: new Date() }, "$year"] },
    },
  },
  {
    $project: { name: 1, expYears: 1, _id: 0, year: 1 },
  },
]);

// db.emp.find({ year: { $year: "$hireDate" } });

db.emp.aggregate([
  {
    $addFields: {
      month: { $month: "$hireDate" },
    },
  },
  {
    $match: {
      month: 2,
    },
  },
]);

//! Group employees into salary ranges: 0-1500, 1500-3000, 3000+
db.emp.aggregate([
  {
    $bucket: {
      groupBy: "$salary",
      boundaries: [0, 1500, 3000, 7000],
      default: "ABove 5000",
      output: {
        count: { $sum: 1 },
        names: { $push: "$name" },
        sal: { $push: "$salary" },
      },
    },
  },
]);

db.emp.aggregate([
  {
    $bucketAuto: {
      groupBy: "$age",
      buckets: 50,
      output: {
        age: { $push: "$age" },
      },
    },
  },
]);

db.emp.aggregate([
  {
    $sortByCount: { salary: 1 },
  },
]);

//! Get both: top 5 earners AND average salary by department
db.emp.aggregate([{ $sortByCount: "$salary" }]);

db.emp.aggregate([
  {
    $facet: {
      topEarner: [
        {
          $sort: { salary: -1 },
        },
        {
          $limit: 3,
        },
        {
          $project: {
            salary: 1,
            _id: 0,
          },
        },
      ],
      avgSaL: [
        {
          $group: {
            _id: null,
            avgSal: { $avg: "$salary" },
          },
        },
      ],
      key: [{}, {}, {}],
    },
  },
]);

db.emp.aggregate([
  {
    $replaceWith: {
      newKey: "$performance",
    },
  },
]);

db.emp.aggregate([
  {
    $sample: { size: 1 },
  },
]);

//! indexing -> ref (storing doc's partial data)
db.emp.find({ name: "smith" }).explain("executionStats");
db.emp
  .find({ _id: ObjectId("66a23517b5c6990483c4e49b") })
  .explain("executionStats");

db.movies.find({ year: { $gt: 1600 } }).explain("executionStats");
db.movies.createIndex({ year: 1 });

// ACID --> atomicity (either 0 or 1), consistency (updates should be reflected), isolation (each operation should be isolated from each other), durability (services may not be available for some time) SQL

// BASE --> basically available (data is always available), soft-state (), eventual consistency ( crud operation in near time it will be completed) NoSQL
