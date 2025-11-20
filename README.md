# mongodb_1530

# MONGODB - Complete Guide

## Table of Contents

- [Introduction](#introduction)
- [Data vs Information](#data-vs-information)
- [What is a Database?](#what-is-a-database)
- [Types of Databases](#types-of-databases)
  - [SQL Databases](#sql-databases)
  - [NoSQL Databases](#nosql-databases)
- [SQL vs NoSQL](#sql-vs-nosql)
- [Scaling Strategies](#scaling-strategies)
- [Additional Resources](#additional-resources)

---

## Introduction

This guide provides a comprehensive overview of Database Management Systems, covering fundamental concepts, different database types, and scaling strategies. Whether you're a beginner or looking to refresh your knowledge, this document will help you understand how data is stored and managed in modern applications.

---

## Data vs Information

### Data

**Data** refers to raw, unprocessed facts and figures without context.

**Examples of Data:**

```
12, 34, 45
varun, ashwin, chetna
english, mathematics, science
```

These are just isolated values with no meaningful context.

### Information

**Information** is processed data that has meaning and context.

**Example of Information:**

```
"Varun scored 12 marks in the English exam"
```

Here, the raw data (12, varun, english) has been processed and combined to create meaningful information.

```
┌─────────────────────────────────────────┐
│          DATA TO INFORMATION            │
├─────────────────────────────────────────┤
│                                         │
│  Raw Data:                              │
│  ┌────┬────┬────┬────────┬─────────┐    │
│  │ 12 │ 34 │ 45 │ varun  │ english │    │
│  └────┴────┴────┴────────┴─────────┘    │
│           ↓ PROCESSING ↓                │
│                                         │
│  Information:                           │
│  "Varun scored 12 marks in English"     │
│                                         │
└─────────────────────────────────────────┘
```

---

## What is a Database?

A **Database** is a container or organized collection where data can be stored, managed, and retrieved efficiently.

### CRUD Operations

Databases allow us to perform four fundamental operations:

- **C** - Create (Insert new data)
- **R** - Read (Retrieve/Query data)
- **U** - Update (Modify existing data)
- **D** - Delete (Remove data)

### Database Management System (DBMS)

A **DBMS** is software that enables users to perform CRUD operations on databases.

**Popular DBMS Examples:**

- MySQL
- Oracle SQL
- PostgreSQL
- MongoDB
- CouchDB
- Redis

```
┌──────────────────────────────────────────┐
│           DBMS Architecture              │
├──────────────────────────────────────────┤
│                                          │
│  User/Application                        │
│        ↕                                 │
│  ┌──────────────┐                        │
│  │     DBMS     │ ← Manages operations   │
│  └──────────────┘                        │
│        ↕                                 │
│  ┌──────────────┐                        │
│  │   Database   │ ← Stores data          │
│  └──────────────┘                        │
│                                          │
└──────────────────────────────────────────┘
```

---

## Types of Databases

There are two primary ways to store and manage data:

### 1. SQL Databases

### 2. NoSQL Databases

---

## SQL Databases

**SQL** stands for **Structured Query Language**

### Key Characteristics:

1. **Tabular Structure**: Data is organized in tables with rows and columns
2. **Relational**: Also known as RDBMS (Relational Database Management System)
3. **Fixed Schema**: Must define table structure before inserting data
4. **Schema Enforcement**: Data must follow the predefined schema strictly

### SQL Database Structure Example:

```
┌────────────────────────────────────────────────┐
│              Students Table                    │
├─────────┬──────────┬─────┬─────────────────────┤
│   ID    │   Name   │ Age │      Subject        │
├─────────┼──────────┼─────┼─────────────────────┤
│    1    │  Varun   │  20 │     English         │
│    2    │  Ashwin  │  21 │   Mathematics       │
│    3    │  Chetna  │  22 │     Science         │
└─────────┴──────────┴─────┴─────────────────────┘

Schema must be defined BEFORE data insertion:
- ID: Integer, Primary Key
- Name: String(50), Not Null
- Age: Integer
- Subject: String(50)
```

### Popular SQL Databases:

- **MySQL** - Most popular open-source database
- **PostgreSQL** - Advanced open-source database
- **Oracle SQL** - Enterprise-level database
- **Microsoft SQL Server** - Microsoft's database solution
- **SQLite** - Lightweight embedded database

### When to Use SQL:

- When data relationships are important
- When data integrity is critical
- For complex queries and transactions
- When ACID properties are required
- For structured, consistent data

---

## NoSQL Databases

**NoSQL** stands for **Not Only SQL**

### Key Characteristics:

1. **Flexible Storage**: Data can be stored in various formats
2. **Non-Relational**: Also known as Non-RDBMS
3. **Dynamic Schema**: No need to define structure beforehand
4. **Scalable**: Designed for horizontal scaling

---

## Four Categories of NoSQL Databases

### 1. Document-Based Databases

**Description**: Data is stored as JSON-like documents (BSON - Binary JSON)

**Examples**: MongoDB, CouchDB

**Structure Example:**

```javascript
// User A
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Varun",
  "age": 20,
  "email": "varun@example.com",
  "subjects": ["English", "Math"]
}

// User B - Notice different structure
// (flexible schema)
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "Ashwin",
  "age": 21,
  "phone": "+1234567890",
  "address": {
    "city": "Mumbai",
    "country": "India"
  }
}
```

**Visual Representation:**

```
┌────────────────────────────────────────┐
│      Document-Based Database           │
├────────────────────────────────────────┤
│  Collection: Users                     │
│  ┌──────────────────────────────────┐  │
│  │  Document 1:                     │  │
│  │  { name: "Varun", age: 20 }      │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  Document 2:                     │  │
│  │  { name: "Ashwin", age: 21,      │  │
│  │    email: "a@mail.com" }         │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

**Use Cases:**

- Content Management Systems
- E-commerce applications
- User profiles
- Catalogs

---

### 2. Key-Value Databases

**Description**: Data is stored as key-value pairs where each pair is independent

**Examples**: Redis, Amazon DynamoDB, Memcached

**Structure Example:**

```javascript
// Each entry is a separate key-value pair
"user:1000:name" → "Varun"
"user:1000:age" → "20"
"user:1000:email" → "varun@example.com"

"session:abc123" → { userId: 1000, loginTime: "2024-01-15", active: true }

"cache:products:123" → { productName: "Laptop", price: 50000 }
```

**Visual Representation:**

```
┌────────────────────────────────────────┐
│       Key-Value Database               │
├────────────────────────────────────────┤
│                                        │
│  Key                  →    Value       │
│  ─────────────────────────────────     │
│  "user:100"          →    {...}        │
│  "session:abc123"    →    {...}        │
│  "cache:product:1"   →    {...}        │
│  "token:xyz789"      →    "jwt..."     │
│                                        │
└────────────────────────────────────────┘
```

**Use Cases:**

- Caching (most common)
- Session management
- Real-time data
- Shopping carts
- User preferences

---

### 3. Graph Databases

**Description**: Data is stored as nodes (entities) and edges (relationships)

**Examples**: Neo4j, Amazon Neptune, ArangoDB

**Structure Example:**

```
Nodes: Person, Company, City
Edges: WORKS_AT, LIVES_IN, FRIENDS_WITH

(Varun:Person)-[:WORKS_AT]->(TechCorp:Company)
(Varun:Person)-[:LIVES_IN]->(Mumbai:City)
(Varun:Person)-[:FRIENDS_WITH]->(Ashwin:Person)
```

**Visual Representation:**

```
┌────────────────────────────────────────────────┐
│           Graph Database                       │
├────────────────────────────────────────────────┤
│                                                │
│      (Varun)                                   │
│         │                                      │
│         │ FRIENDS_WITH                         │
│         ↓                                      │
│      (Ashwin)──WORKS_AT --→(TechCorp)          │
│         │                                      │
│         │ LIVES_IN                             │
│         ↓                                      │
│      (Mumbai)                                  │
│                                                │
└────────────────────────────────────────────────┘
```

**Use Cases:**

- Social networks
- Recommendation engines
- Fraud detection
- Knowledge graphs
- Network topology

---

### 4. Wide-Column Databases

**Description**: Data is stored in columns rather than rows, optimized for queries over large datasets

**Examples**: Apache Cassandra, HBase, Google Bigtable

**Structure Example:**

```
Row Key: user_1000
├─ Column Family: personal_info
│  ├─ name: "Varun"
│  ├─ age: "20"
│  └─ email: "varun@example.com"
├─ Column Family: academic_info
│  ├─ grade: "A"
│  ├─ subjects: ["English", "Math"]
│  └─ gpa: "3.8"
```

**Visual Representation:**

```
┌──────────────────────────────────────────────────┐
│         Wide-Column Database                     │
├──────────────────────────────────────────────────┤
│                                                  │
│  Row Key  │  Column Family 1  │  Column Family 2 │
│  ─────────┼───────────────────┼───────────────── │
│  user_1   │  name: "Varun"    │  grade: "A"      │
│           │  age: 20          │  gpa: 3.8        │
│  ─────────┼───────────────────┼───────────────── │
│  user_2   │  name: "Ashwin"   │  grade: "B+"     │
│           │  age: 21          │  gpa: 3.5        │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Use Cases:**

- Data analytics
- Time-series data
- IoT applications
- AI/ML model training
- Large-scale data warehousing

---

## SQL vs NoSQL

### Comprehensive Comparison Table

| Feature            | SQL                                            | NoSQL                                           |
| ------------------ | ---------------------------------------------- | ----------------------------------------------- |
| **Data Structure** | Tables (rows & columns)                        | Documents, Key-Value, Graphs, Wide-Columns      |
| **Schema**         | Fixed, predefined schema required              | Dynamic, flexible schema                        |
| **Scaling**        | Vertical scaling (upgrade existing hardware)   | Horizontal scaling (add more servers)           |
| **Relationships**  | Strong emphasis on data relationships          | Relationships less important                    |
| **Data Integrity** | High (ACID properties)                         | Eventual consistency (BASE properties)          |
| **Transactions**   | Full ACID support                              | Limited transaction support                     |
| **Rollback**       | Data rollback possible (UNDO)                  | Data rollback not typically available           |
| **Query Language** | Standardized SQL                               | Varies by database                              |
| **Best For**       | Complex queries, transactions, structured data | Large-scale data, flexibility, high performance |

---

## SQL Properties: ACID

```
┌─────────────────────────────────────────────┐
│              ACID Properties                │
├─────────────────────────────────────────────┤
│                                             │
│  A - Atomicity                              │
│      All or nothing - transaction           │
│      either completes fully or not at all   │
│                                             │
│  C - Consistency                            │
│      Data remains valid and follows         │
│      all defined rules and constraints      │
│                                             │
│  I - Isolation                              │
│      Concurrent transactions don't          │
│      interfere with each other              │
│                                             │
│  D - Durability                             │
│      Once committed, data persists          │
│      even after system failure              │
│                                             │
└─────────────────────────────────────────────┘
```

### ACID Example:

```sql
-- Bank Transfer Transaction
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;

-- If any step fails, entire transaction is rolled back
-- Ensuring money is neither lost nor duplicated
```

---

## NoSQL Properties: BASE

```
┌─────────────────────────────────────────────┐
│              BASE Properties                │
├─────────────────────────────────────────────┤
│                                             │
│  BA - Basically Available                   │
│       System guarantees availability        │
│       even if some parts fail               │
│                                             │
│  S - Soft State                             │
│      Data may be in inconsistent state      │
│      temporarily                            │
│                                             │
│  E - Eventually Consistent                  │
│      Data will become consistent over       │
│      time, but not immediately              │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Scaling Strategies

**Scaling** refers to altering the size or capacity of a system to handle increased load.

### Vertical Scaling (Scale Up)

**Definition**: Adding more resources (CPU, RAM, Storage) to existing hardware

**Example:**

```javascript
// Before Scaling
let myLaptop = {
  RAM: 16, // GB
  HDD: 1024, // GB
  CPU: 4, // cores
};

// After Vertical Scaling (Upgrading the SAME laptop)
let myLaptopUpgraded = {
  RAM: 32, // Doubled RAM
  HDD: 2048, // Doubled Storage
  CPU: 8, // Doubled CPU cores
};
```

**Visual Representation:**

```
┌────────────────────────────────────────────┐
│        Vertical Scaling                    │
├────────────────────────────────────────────┤
│                                            │
│   Before:                                  │
│   ┌──────────────┐                         │
│   │   Server     │                         │
│   │  RAM: 16GB   │                         │
│   │  HDD: 1TB    │                         │
│   └──────────────┘                         │
│          ↓                                 │
│      UPGRADE                               │
│          ↓                                 │
│   After:                                   │
│   ┌──────────────┐                         │
│   │   Server     │                         │
│   │  RAM: 32GB   │ ← More powerful         │
│   │  HDD: 2TB    │ ← Same machine          │
│   └──────────────┘                         │
│                                            │
└────────────────────────────────────────────┘
```

**Advantages:**

- Simpler to implement
- No application changes required
- Data consistency maintained
- Lower licensing costs

**Disadvantages:**

- Hardware limitations (can't scale indefinitely)
- Expensive high-end hardware
- Single point of failure
- Downtime during upgrades

**Best For:** SQL databases, traditional applications

---

### Horizontal Scaling (Scale Out)

**Definition**: Adding more machines/servers to the existing system

**Example:**

```javascript
// Existing System
let myLaptop = {
  RAM: 16, // GB
  HDD: 1024, // GB
  CPU: 4, // cores
};

// After Horizontal Scaling (Adding NEW laptop)
let laptop1 = {
  RAM: 16,
  HDD: 1024,
  CPU: 4,
};

let laptop2 = {
  // NEW machine added
  RAM: 16,
  HDD: 1024,
  CPU: 4,
};

// Total System Capacity = laptop1 + laptop2
```

**Visual Representation:**

```
┌─────────────────────────────────────────────────┐
│         Horizontal Scaling                      │
├─────────────────────────────────────────────────┤
│                                                 │
│   Before:                                       │
│   ┌──────────────┐                              │
│   │   Server 1   │                              │
│   │  RAM: 16GB   │                              │
│   └──────────────┘                              │
│                                                 │
│          ↓                                      │
│      ADD MORE SERVERS                           │
│          ↓                                      │
│   After:                                        │
│   ┌──────────────┐  ┌──────────────┐            │
│   │   Server 1   │  │   Server 2   │            │
│   │  RAM: 16GB   │  │  RAM: 16GB   │ ← New      │
│   └──────────────┘  └──────────────┘            │
│          │                  │                   │
│          └──────┬───────────┘                   │
│              ┌──┴─────┐                         │
│              │ Load   │                         │
│              │Balancer│                         │
│              └────────┘                         │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Advantages:**

- Virtually unlimited scaling
- Better fault tolerance (no single point of failure)
- Cost-effective (use commodity hardware)
- No downtime during scaling

**Disadvantages:**

- More complex architecture
- Data consistency challenges
- Network overhead
- Requires load balancing

**Best For:** NoSQL databases, cloud applications, microservices

---

## Comparison: Vertical vs Horizontal Scaling

```
┌───────────────────────────────────────────────────────────┐
│           Scaling Strategy Comparison                     │
├──────────────────┬────────────────────┬───────────────────┤
│    Aspect        │  Vertical Scaling  │ Horizontal Scaling│
├──────────────────┼────────────────────┼───────────────────┤
│  Cost            │  High              │  Low to Medium    │
│  Complexity      │  Low               │  High             │
│  Downtime        │  Yes               │  No               │
│  Scalability     │  Limited           │  Unlimited        │
│  Fault Tolerance │  Low               │  High             │
│  SQL Databases   │  ✓ Preferred       │  ✗ Difficult      │
│  NoSQL Databases │  ✗ Not ideal       │  ✓ Preferred      │
└──────────────────┴────────────────────┴───────────────────┘
```

---

## Decision Tree: Choosing the Right Database

```
┌─────────────────────────────────────────────────────────────┐
│          Database Selection Decision Tree                   │
└─────────────────────────────────────────────────────────────┘

                    Start
                      │
          ┌───────────┴───────────┐
          │                       │
    Is data highly          Do you need
    structured?              flexibility?
          │                       │
      ┌───┴───┐             ┌────┴────┐
     YES      NO            YES       NO
      │        │             │         │
      │        │             │         │
  Are ACID     │         Need to   Consider
  properties   │         scale      SQL with
  critical?    │         massively? careful
      │        │             │      planning
  ┌───┴───┐    │         ┌───┴───┐
 YES      NO   │        YES      NO
  │        │   │         │        │
  │        │   │         │        │
  SQL     ↓    │         │       SQL or
          │    │      NoSQL    Document DB
          │    │         │
          │    └─────────┴──────── → Evaluate:
          │                        - Data relationships
          │                        - Query patterns
          │                        - Team expertise
          │                        - Scale requirements
          │
          └─────────→ Choose appropriate database type
```

---

## Real-World Use Cases

### E-Commerce Platform Example

```
┌─────────────────────────────────────────────────────────┐
│         E-Commerce System Architecture                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────┐      │
│  │ User Authentication & Orders                │      │
│  │ Database: MySQL (SQL)                       │      │
│  │ Reason: ACID properties for transactions    │      │
│  └─────────────────────────────────────────────┘      │
│                                                         │
│  ┌─────────────────────────────────────────────┐      │
│  │ Product Catalog                             │      │
│  │ Database: MongoDB (Document-based)          │      │
│  │ Reason: Flexible schema for varied products│      │
│  └─────────────────────────────────────────────┘      │
│                                                         │
│  ┌─────────────────────────────────────────────┐      │
│  │ Session & Cache                             │      │
│  │ Database: Redis (Key-Value)                 │      │
│  │ Reason: Fast access, temporary data         │      │
│  └─────────────────────────────────────────────┘      │
│                                                         │
│  ┌─────────────────────────────────────────────┐      │
│  │ Product Recommendations                     │      │
│  │ Database: Neo4j (Graph)                     │      │
│  │ Reason: Complex relationships              │      │
│  └─────────────────────────────────────────────┘      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Best Practices

### For SQL Databases:

1. ✅ Normalize data to reduce redundancy
2. ✅ Create proper indexes for frequently queried columns
3. ✅ Use foreign keys to maintain referential integrity
4. ✅ Implement proper backup and recovery strategies
5. ✅ Optimize queries using EXPLAIN plans
6. ✅ Use transactions for multi-step operations

### For NoSQL Databases:

1. ✅ Design schema based on query patterns
2. ✅ Denormalize data for read performance
3. ✅ Use appropriate database type for use case
4. ✅ Implement application-level data validation
5. ✅ Plan for eventual consistency
6. ✅ Use caching strategically

---

## Common Database Operations

### SQL Example (MySQL):

```sql
-- Create Table (Schema Definition Required)
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INT,
    subject VARCHAR(50)
);

-- Insert Data
INSERT INTO students (name, age, subject)
VALUES ('Varun', 20, 'English');

-- Read Data
SELECT * FROM students WHERE age > 18;

-- Update Data
UPDATE students SET age = 21 WHERE name = 'Varun';

-- Delete Data
DELETE FROM students WHERE id = 1;
```

### NoSQL Example (MongoDB):

```javascript
// No schema definition needed!

// Insert Document
db.students.insertOne({
  name: "Varun",
  age: 20,
  subject: "English",
  hobbies: ["reading", "coding"], // Flexible structure
});

// Read Documents
db.students.find({ age: { $gt: 18 } });

// Update Document
db.students.updateOne({ name: "Varun" }, { $set: { age: 21 } });

// Delete Document
db.students.deleteOne({ name: "Varun" });
```

---

## Summary

### Key Takeaways:

1. **Data vs Information**: Data is raw facts; information is processed data with meaning

2. **SQL Databases**:

   - Structured, table-based storage
   - Fixed schema, ACID properties
   - Best for: Complex relationships, transactions, data integrity

3. **NoSQL Databases**:

   - Flexible, document/key-value/graph/column storage
   - Dynamic schema, BASE properties
   - Best for: Scalability, flexibility, large datasets

4. **Scaling**:

   - Vertical: Upgrade existing hardware (SQL-friendly)
   - Horizontal: Add more machines (NoSQL-friendly)

5. **Choose Based On**:
   - Data structure requirements
   - Scalability needs
   - Consistency requirements
   - Team expertise

---

---

## MongoDB - Deep Dive

### What is MongoDB?

**MongoDB** is a document-based NoSQL database that stores data in JSON-like documents (BSON format) and is dynamic in nature.

**Key Characteristics:**

- Document-oriented storage
- Flexible schema (no predefined structure required)
- High performance and scalability
- Rich query language
- Built-in replication and sharding

```
┌────────────────────────────────────────────────┐
│           MongoDB Architecture                 │
├────────────────────────────────────────────────┤
│                                                │
│  Application                                   │
│       │                                        │
│       ├─────→ MongoDB Compass (GUI)            │
│       │             ↓                          │
│       ├─────→ Mongo Shell (CLI)                │
│       │             ↓                          │
│       └─────→ Driver (Node.js/Python/etc.)     │
│                     ↓                          │
│              MongoDB Server                    │
│         (mongodb://localhost:27017/)           │
│                     ↓                          │
│              ┌──────────────┐                  │
│              │  Databases   │                  │
│              │  Collections │                  │
│              │  Documents   │                  │
│              └──────────────┘                  │
│                                                │
└────────────────────────────────────────────────┘
```

---

## MongoDB Installation

To work with MongoDB, you need to install three essential components:

### 1. MongoDB Community Server

**Purpose**: The core database server that stores and manages your data

**Download Link**:

```
https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.2.1-signed.msi
```

**What it does:**

- Runs the MongoDB database service
- Listens for connections on port 27017 (default)
- Stores all database files
- Provides the database engine

**Server Address**: `mongodb://localhost:27017/`

```
┌─────────────────────────────────────────┐
│      MongoDB Community Server           │
├─────────────────────────────────────────┤
│                                         │
│  • Core database engine                 │
│  • Default port: 27017                  │
│  • Stores data on disk                  │
│  • Handles queries and operations       │
│  • Manages connections                  │
│                                         │
└─────────────────────────────────────────┘
```

---

### 2. MongoDB Compass

**Purpose**: Graphical User Interface (GUI) for MongoDB

**Download Link**:

```
https://downloads.mongodb.com/compass/mongodb-compass-1.48.2-win32-x64.exe
```

**What it does:**

- Visual interface to interact with databases
- Perform CRUD operations without writing code
- View and analyze data visually
- Create and manage databases, collections
- Query builder and aggregation pipeline builder

**Important Note**:

- ❌ Cannot insert JavaScript objects directly
- ✅ Only accepts JSON format for data insertion

```
┌─────────────────────────────────────────────────────┐
│          MongoDB Compass (GUI)                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌───────────────────────────────────────────┐      │
│  │  Visual Interface                         │      │
│  │  • Browse databases & collections         │      │
│  │  • Insert/Update/Delete documents         │      │
│  │  • Run queries visually                   │      │
│  │  • View query performance                 │      │
│  │  • Schema analysis                        │      │
│  │  • Import/Export data                     │      │
│  └───────────────────────────────────────────┘      │
│                                                     │
│  Limitation: Only accepts JSON, not JS objects      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Example - Compass Data Entry:**

```json
// ✅ VALID in Compass (JSON format)
{
  "name": "Varun",
  "age": 20,
  "subjects": ["English", "Math"]
}

// ❌ INVALID in Compass (JavaScript object)
let user = {
  name: "Varun",
  age: 20,
  subjects: ["English", "Math"]
};
```

---

### 3. Mongo Shell (mongosh)

**Purpose**: Command-Line Interface (CLI) for MongoDB

**Download Link**:

```
https://downloads.mongodb.com/compass/mongosh-2.5.9-x64.msi
```

**What it does:**

- Interactive shell to execute MongoDB commands
- Built using JavaScript
- Accepts both JavaScript objects and JSON
- Scripting and automation capabilities
- Advanced operations and administration

**Key Features:**

- ✅ Can insert JavaScript objects
- ✅ Can insert JSON data
- ✅ Full programmatic control
- ✅ Execute complex queries and operations

```
┌─────────────────────────────────────────────────────┐
│         Mongo Shell (mongosh) - CLI                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│  $ mongosh                                          │
│  Current Mongosh Log ID: ...                        │
│  Connecting to: mongodb://localhost:27017/          │
│  Using MongoDB: 8.2.1                               │
│                                                     │
│  test> show dbs                                     │
│  test> use myDatabase                               │
│  test> db.collection.insertOne({...})               │
│                                                     │
│  Features:                                          │
│  • JavaScript-based shell                           │
│  • Accepts JS objects and JSON                      │
│  • Command history                                  │
│  • Auto-completion                                  │
│  • Scripting support                                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Example - Shell Data Entry:**

```javascript
// ✅ VALID in Shell (JavaScript object)
db.students.insertOne({
  name: "Varun",
  age: 20,
  subjects: ["English", "Math"],
});

// ✅ Also VALID in Shell (JSON format)
db.students.insertOne({
  name: "Ashwin",
  age: 21,
  subjects: ["Science", "History"],
});

// ✅ VALID - Using variables (only in shell)
let newUser = {
  name: "Chetna",
  age: 22,
  email: "chetna@example.com",
};
db.students.insertOne(newUser);
```

---

## MongoDB Components

### Component Comparison

| Component           | Type            | Code Required    | Data Format       | Best For                                   |
| ------------------- | --------------- | ---------------- | ----------------- | ------------------------------------------ |
| **MongoDB Server**  | Database Engine | N/A              | BSON              | Core database operations                   |
| **MongoDB Compass** | GUI             | No               | JSON only         | Visual data exploration, beginners         |
| **Mongo Shell**     | CLI             | Yes (JavaScript) | JSON + JS Objects | Advanced operations, scripting, developers |

---

## MongoDB Server Management

### Server Control Commands

The MongoDB server must be running for Compass and Shell to connect to it.

#### Starting and Stopping Server (Windows)

**Open Command Prompt as Administrator**, then use:

```bash
# Stop MongoDB Server
net stop mongodb

# Start MongoDB Server
net start mongodb

# Check MongoDB Service Status
sc query mongodb
```

**Visual Workflow:**

```
┌────────────────────────────────────────────────────┐
│       MongoDB Server Management                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  1. Open CMD as Administrator                      │
│     Right-click CMD → Run as administrator         │
│                                                    │
│  2. Stop Server                                    │
│     > net stop mongodb                             │
│     The MongoDB Server service is stopping.        │
│     The MongoDB Server service was stopped.        │
│                                                    │
│  3. Start Server                                   │
│     > net start mongodb                            │
│     The MongoDB Server service is starting.        │
│     The MongoDB Server service was started.        │
│                                                    │
│  ⚠️  Server must be running for connections!       │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

### Using Mongo Shell (mongosh)

#### Entering the Shell

```bash
# Open regular Command Prompt (no admin rights needed)
> mongosh

# You'll see:
Current Mongosh Log ID: 65a1b2c3d4e5f6g7h8i9j0k1
Connecting to:          mongodb://localhost:27017/?directConnection=true
Using MongoDB:          8.2.1
Using Mongosh:          2.5.9

test>
```

#### Exiting the Shell

```bash
# Method 1: Using exit command
test> .exit

# Method 2: Using keyboard shortcut
test> [Press Ctrl+C]

# Method 3: Using exit() function
test> exit()
```

**Shell Session Example:**

```
┌────────────────────────────────────────────────────┐
│         Mongo Shell Session Example                │
├────────────────────────────────────────────────────┤
│                                                    │
│  $ mongosh                                         │
│  test>                        ← Default database   │
│                                                    │
│  test> show dbs               ← List databases     │
│  admin   40.00 KiB                                 │
│  config  12.00 KiB                                 │
│  local   40.00 KiB                                 │
│                                                    │
│  test> use mySchool           ← Switch/create DB   │
│  switched to db mySchool                           │
│                                                    │
│  mySchool> db.students.insertOne({                 │
│  ...   name: "Varun",                              │
│  ...   age: 20                                     │
│  ... })                                            │
│  {                                                 │
│    acknowledged: true,                             │
│    insertedId: ObjectId('65a1b2c3d4e5f6g7h8i9j0')  │
│  }                                                 │
│                                                    │
│  mySchool> .exit              ← Exit shell         │
│  $                                                 │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## Quick Start Guide

### Step-by-Step Setup

```
┌────────────────────────────────────────────────────────┐
│         MongoDB Quick Start Workflow                   │
├────────────────────────────────────────────────────────┤
│                                                        │
│  Step 1: Install Components                            │
│  ├─ Install MongoDB Community Server                   │
│  ├─ Install MongoDB Compass                            │
│  └─ Install Mongo Shell (mongosh)                      │
│                                                        │
│  Step 2: Start MongoDB Server                          │
│  └─ Open CMD as Admin → net start mongodb              │
│                                                        │
│  Step 3: Choose Your Interface                         │
│  ├─ Option A: MongoDB Compass (GUI)                    │
│  │   └─ Connect to: mongodb://localhost:27017/         │
│  │                                                     │
│  └─ Option B: Mongo Shell (CLI)                        │
│      └─ Open CMD → Type: mongosh                       │
│                                                        │
│  Step 4: Start Working with Data                       │
│  ├─ Create databases                                   │
│  ├─ Create collections                                 │
│  ├─ Insert documents                                   │
│  └─ Query and manipulate data                          │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## MongoDB vs SQL Terminology

| SQL Term    | MongoDB Equivalent | Description                          |
| ----------- | ------------------ | ------------------------------------ |
| Database    | Database           | Container for collections            |
| Table       | Collection         | Container for documents              |
| Row         | Document           | Single record (JSON-like)            |
| Column      | Field              | Single data element                  |
| Primary Key | \_id               | Unique identifier (auto-generated)   |
| Index       | Index              | Performance optimization             |
| JOIN        | Embedding/$lookup  | Combining data from multiple sources |

**Visual Comparison:**

```
┌─────────────────────────────────────────────────────────┐
│          SQL vs MongoDB Structure                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  SQL Database:                                          │
│  └─ Students Table                                      │
│      ├─ Row 1: id=1, name="Varun", age=20               │
│      ├─ Row 2: id=2, name="Ashwin", age=21              │
│      └─ Row 3: id=3, name="Chetna", age=22              │
│                                                         │
│  MongoDB Database:                                      │
│  └─ students Collection                                 │
│      ├─ Document 1: {_id: ..., name: "Varun", age: 20}  │
│      ├─ Document 2: {_id: ..., name: "Ashwin", age: 21} │
│      └─ Document 3: {_id: ..., name: "Chetna", age: 22} │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Connection String Format

```
┌────────────────────────────────────────────────────────┐
│         MongoDB Connection String                      │
├────────────────────────────────────────────────────────┤
│                                                        │
│  mongodb://localhost:27017/                            │
│  └─┬─┘   └────┬────┘ └─┬─┘                             │
│    │          │        │                               │
│    │          │        └─ Port number                  │
│    │          └────────── Host (localhost = your PC)   │
│    └───────────────────── Protocol                     │
│                                                        │
│  Full format with options:                             │
│  mongodb://username:password@host:port/database?options│
│                                                        │
│  Examples:                                             │
│  • mongodb://localhost:27017/                          │
│  • mongodb://localhost:27017/myDatabase                │
│  • mongodb://user:pass@localhost:27017/myDB            │
│  • mongodb://192.168.1.100:27017/                      │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## Key Differences: Compass vs Shell

### MongoDB Compass (GUI)

**Advantages:**

- ✅ User-friendly visual interface
- ✅ No coding knowledge required
- ✅ Great for beginners
- ✅ Easy data visualization
- ✅ Point-and-click operations
- ✅ Built-in query builder

**Limitations:**

- ❌ Only accepts JSON format
- ❌ Cannot use JavaScript variables
- ❌ Limited scripting capabilities
- ❌ Slower for bulk operations

**Best For:**

- Quick data exploration
- Beginners learning MongoDB
- Visual schema analysis
- One-off manual operations

---

### Mongo Shell (CLI)

**Advantages:**

- ✅ Accepts JavaScript objects and JSON
- ✅ Full programming capabilities
- ✅ Can use variables and functions
- ✅ Scripting and automation
- ✅ Faster for bulk operations
- ✅ More powerful and flexible

**Limitations:**

- ❌ Requires command-line knowledge
- ❌ Steeper learning curve
- ❌ No visual interface
- ❌ Text-based only

**Best For:**

- Advanced operations
- Automation and scripting
- Development and testing
- Bulk operations
- Production management

---

## MongoDB Installation Checklist

```markdown
### Installation Verification Checklist

□ MongoDB Community Server installed
└─ Verify: Open Services → Find "MongoDB Server"

□ MongoDB Compass installed
└─ Verify: Launch Compass → See connection screen

□ Mongo Shell (mongosh) installed
└─ Verify: Open CMD → Type "mongosh --version"

□ MongoDB Server is running
└─ Verify: CMD (Admin) → "sc query mongodb"
Look for "STATE: RUNNING"

□ Can connect via Compass
└─ Verify: Open Compass → Connect to localhost:27017
Should see "admin", "config", "local" databases

□ Can connect via Shell
└─ Verify: CMD → "mongosh"
Should see connection success message

✅ All checks passed? You're ready to start using MongoDB!
```

---

## Common Issues and Solutions

### Issue 1: Cannot Connect to Server

```javascript
❌ Error: connect ECONNREFUSED 127.0.0.1:27017

✅ Solution:
1. Check if MongoDB Server is running
   CMD (Admin) → net start mongodb

2. Check if port 27017 is available
   CMD → netstat -ano | findstr :27017

3. Check firewall settings
```

### Issue 2: mongosh Command Not Found

```javascript
❌ Error: 'mongosh' is not recognized

✅ Solution:
1. Verify installation
   Check: C:\Program Files\mongosh\

2. Add to PATH environment variable
   System Properties → Environment Variables
   → Add mongosh bin directory to PATH

3. Restart Command Prompt
```

### Issue 3: Access Denied When Starting Server

```javascript
❌ Error: Access is denied

✅ Solution:
1. Run Command Prompt as Administrator
   Right-click CMD → "Run as administrator"

2. Then execute: net start mongodb
```

---

## Summary

### Key Takeaways:

1. **MongoDB** is a document-based NoSQL database storing data as JSON-like documents

2. **Three Components** needed:

   - **MongoDB Server**: The database engine (mongodb://localhost:27017/)
   - **MongoDB Compass**: GUI for visual data management (JSON only)
   - **Mongo Shell**: CLI for programmatic access (JavaScript + JSON)

3. **Server Management**:

   - Start: `net start mongodb` (Admin CMD)
   - Stop: `net stop mongodb` (Admin CMD)

4. **Shell Commands**:

   - Enter: `mongosh`
   - Exit: `.exit` or `Ctrl+C`

5. **Compass vs Shell**:

   - Compass: User-friendly, JSON only, visual interface
   - Shell: More powerful, JavaScript support, automation

6. **Data Format**:
   - Compass: JSON format only
   - Shell: Both JavaScript objects and JSON

---

## Summary

### Key Takeaways:

1. **Data vs Information**: Data is raw facts; information is processed data with meaning

2. **SQL Databases**:

   - Structured, table-based storage
   - Fixed schema, ACID properties
   - Best for: Complex relationships, transactions, data integrity

3. **NoSQL Databases**:

   - Flexible, document/key-value/graph/column storage
   - Dynamic schema, BASE properties
   - Best for: Scalability, flexibility, large datasets

4. **Scaling**:

   - Vertical: Upgrade existing hardware (SQL-friendly)
   - Horizontal: Add more machines (NoSQL-friendly)

5. **Choose Based On**:
   - Data structure requirements
   - Scalability needs
   - Consistency requirements
   - Team expertise

---

## MongoDB Shell Commands

This section covers essential MongoDB shell commands for database and collection management.

### Understanding the `db` Object

```javascript
// What is db?
typeof db; // Returns: "object"

// db is a JavaScript object that represents the current database
// It provides methods to interact with the database
```

```
┌────────────────────────────────────────────────────┐
│          Understanding the 'db' Object             │
├────────────────────────────────────────────────────┤
│                                                    │
│  db = {                                            │
│    // Current database reference                   │
│    // Provides methods for operations:             │
│    createCollection(),                             │
│    dropDatabase(),                                 │
│    getCollectionNames(),                           │
│    // ... and many more                            │
│  }                                                 │
│                                                    │
│  Usage Example:                                    │
│  test> db                       // Shows current DB│
│  test> typeof db                // Returns: object │
│  test> db.getName()             // Returns: test   │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

### 1. Listing All Databases

**Command:**

```javascript
show dbs
// OR
show databases
```

**Description**: Lists all databases present on the MongoDB server with their sizes

**Example Output:**

```
admin    40.00 KiB
config   12.00 KiB
local    40.00 KiB
library  80.00 KiB
school   56.00 KiB
```

**Visual Representation:**

```
┌────────────────────────────────────────────────────┐
│          show dbs / show databases                 │
├────────────────────────────────────────────────────┤
│                                                    │
│  Command: show dbs                                 │
│                                                    │
│  MongoDB Server                                    │
│  ├─ admin     (40 KiB)  ← System database         │
│  ├─ config    (12 KiB)  ← Configuration data      │
│  ├─ local     (40 KiB)  ← Local server data       │
│  ├─ library   (80 KiB)  ← User database           │
│  └─ school    (56 KiB)  ← User database           │
│                                                    │
│  Note: Empty databases won't appear in the list   │
│        until they contain at least one collection │
│        with data                                   │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Important Notes:**

- **System Databases**: `admin`, `config`, and `local` are system databases created by MongoDB
- **Empty Databases**: Won't appear in the list until they have at least one collection with data
- **Size Display**: Shows the disk space used by each database

---

### 2. Creating/Switching Database

**Command:**

```javascript
use database_name
```

**Description**: Creates a new database or switches to an existing database

**Example:**

```javascript
// Create/Switch to library database
test> use library
switched to db library

library>  // Notice the prompt changed
```

**How it Works:**

```
┌────────────────────────────────────────────────────┐
│              use database_name                     │
├────────────────────────────────────────────────────┤
│                                                    │
│  Scenario 1: Database EXISTS                       │
│  ─────────────────────────────                     │
│  use library                                       │
│    ↓                                               │
│  Switches to 'library' database                    │
│  Prompt: library>                                  │
│                                                    │
│  Scenario 2: Database DOES NOT EXIST               │
│  ──────────────────────────────────────            │
│  use newDatabase                                   │
│    ↓                                               │
│  Creates 'newDatabase' in memory                   │
│  Prompt: newDatabase>                              │
│    ↓                                               │
│  ⚠️ Database won't be saved until:                 │
│     1. You create a collection                     │
│     2. You insert data into a collection           │
│                                                    │
│  Example:                                          │
│  newDatabase> show dbs                             │
│  (newDatabase won't appear yet)                    │
│                                                    │
│  newDatabase> db.createCollection("users")         │
│  newDatabase> show dbs                             │
│  (newDatabase now appears in the list)             │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Practical Example:**

```javascript
// Step 1: Create/Switch to new database
test> use myShop
switched to db myShop

// Step 2: Check databases (myShop won't appear)
myShop> show dbs
admin    40 KiB
config   12 KiB
local    40 KiB
// myShop is NOT listed yet

// Step 3: Create a collection
myShop> db.createCollection("products")
{ ok: 1 }

// Step 4: Check databases again (myShop appears)
myShop> show dbs
admin    40 KiB
config   12 KiB
local    40 KiB
myShop    8 KiB  // ← Now it appears!
```

---

### 3. Understanding the Default Database

**Default Database**: `test`

```
┌────────────────────────────────────────────────────┐
│          Default Database: 'test'                  │
├────────────────────────────────────────────────────┤
│                                                    │
│  When you start mongosh:                           │
│                                                    │
│  $ mongosh                                         │
│  Connecting to: mongodb://localhost:27017/         │
│  Using MongoDB: 8.2.1                              │
│                                                    │
│  test>  ← Shell prompt shows current database      │
│                                                    │
│  The prompt always indicates which database        │
│  you're currently working with:                    │
│                                                    │
│  test>      ← Working with 'test' database         │
│  library>   ← Working with 'library' database      │
│  school>    ← Working with 'school' database       │
│                                                    │
│  To check current database:                        │
│  test> db                                          │
│  test                                              │
│                                                    │
│  test> db.getName()                                │
│  test                                              │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

### 4. Creating a Collection

**Command:**

```javascript
db.createCollection("collection_name");
```

**Description**: Creates a new collection within the current database

**Example:**

```javascript
// Create a 'books' collection
library > db.createCollection("books");
{
  ok: 1;
}

// Create multiple collections
library > db.createCollection("authors");
{
  ok: 1;
}

library > db.createCollection("publishers");
{
  ok: 1;
}
```

**Return Value:**

- `{ ok: 1 }` - Collection created successfully
- `{ ok: 0 }` - Error occurred (with error message)

**Visual Representation:**

```
┌────────────────────────────────────────────────────┐
│          db.createCollection()                     │
├────────────────────────────────────────────────────┤
│                                                    │
│  library> db.createCollection("books")             │
│                                                    │
│  MongoDB Server                                    │
│  └─ library (database)                             │
│      ├─ books (collection) ← NEW                   │
│      └─ (empty collection created)                 │
│                                                    │
│  Response: { ok: 1 }                               │
│                                                    │
│  ┌──────────────────────────────────────────┐    │
│  │  Collection Structure                    │    │
│  │                                          │    │
│  │  books: [                                │    │
│  │    // Documents will go here             │    │
│  │    // Currently empty                    │    │
│  │  ]                                       │    │
│  └──────────────────────────────────────────┘    │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Advanced Options:**

```javascript
// Create collection with options
db.createCollection("users", {
  capped: true, // Fixed-size collection
  size: 5242880, // Max size in bytes (5MB)
  max: 5000, // Max number of documents
});

// Create collection with validation
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        price: {
          bsonType: "number",
          minimum: 0,
          description: "must be a number and is required",
        },
      },
    },
  },
});
```

---

### 5. Listing All Collections

**Command:**

```javascript
show collections
```

**Description**: Displays all collections present in the current database

**Example:**

```javascript
library> show collections
books
authors
publishers
```

**Visual Representation:**

```
┌────────────────────────────────────────────────────┐
│              show collections                      │
├────────────────────────────────────────────────────┤
│                                                    │
│  library> show collections                         │
│                                                    │
│  Current Database: library                         │
│  ├─ books         ← Collection 1                   │
│  ├─ authors       ← Collection 2                   │
│  └─ publishers    ← Collection 3                   │
│                                                    │
│  Alternative commands:                             │
│  • db.getCollectionNames()                         │
│  • db.getCollectionInfos()  (detailed info)        │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Alternative Methods:**

```javascript
// Method 1: Get array of collection names
library> db.getCollectionNames()
[ 'books', 'authors', 'publishers' ]

// Method 2: Get detailed collection information
library> db.getCollectionInfos()
[
  {
    name: 'books',
    type: 'collection',
    options: {},
    info: {
      readOnly: false,
      uuid: UUID("...")
    },
    idIndex: { v: 2, key: { _id: 1 }, name: '_id_' }
  },
  // ... more collections
]

// Method 3: Get collection count
library> db.getCollectionNames().length
3
```

---

### 6. Practical Exercise - Creating School Database

**Task**: Create a school database with three collections

```javascript
// Step 1: Create/Switch to school database
test> use school
switched to db school

// Step 2: Create students collection
school> db.createCollection("students")
{ ok: 1 }

// Step 3: Create teachers collection
school> db.createCollection("teachers")
{ ok: 1 }

// Step 4: Create otherStaff collection
school> db.createCollection("otherStaff")
{ ok: 1 }

// Step 5: Verify collections
school> show collections
students
teachers
otherStaff
```

**Visual Result:**

```
┌────────────────────────────────────────────────────┐
│          School Database Structure                 │
├────────────────────────────────────────────────────┤
│                                                    │
│  MongoDB Server                                    │
│  └─ school (database)                              │
│      ├─ students (collection)                      │
│      ├─ teachers (collection)                      │
│      └─ otherStaff (collection)                    │
│                                                    │
│  All collections are empty and ready for data      │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

### 7. Shell Shortcuts and Tips

**Productivity Tips:**

```
┌────────────────────────────────────────────────────┐
│          MongoDB Shell Shortcuts                   │
├────────────────────────────────────────────────────┤
│                                                    │
│  1. TAB Completion                                 │
│     Type partial command + TAB                     │
│     Example: db.cr[TAB] → db.createCollection()    │
│                                                    │
│  2. Command History                                │
│     ↑ (Up Arrow)    - Previous command             │
│     ↓ (Down Arrow)  - Next command                 │
│                                                    │
│  3. Clear Screen                                   │
│     Method 1: Type 'cls'                           │
│     Method 2: Press Ctrl + L                       │
│                                                    │
│  4. Multi-line Commands                            │
│     Press Enter to continue on next line           │
│     mongosh waits for complete command             │
│                                                    │
│  5. Help Commands                                  │
│     help             - General help                │
│     db.help()        - Database methods            │
│     db.collection.help()  - Collection methods     │
│                                                    │
│  6. Exit Shell                                     │
│     .exit  OR  Ctrl+C  OR  exit()                  │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Practical Examples:**

```javascript
// Tab completion example
test> db.cre[TAB]
// Autocompletes to: db.createCollection

test> db.c[TAB][TAB]
// Shows all methods starting with 'c':
// createCollection  createView  currentOp...

// Multi-line command example
test> db.createCollection(
...     "users",
...     { capped: true }
... )
{ ok: 1 }

// Help commands
test> help
  Shell Help:
    use                      Set current database
    show                     Show databases/collections
    exit                     Exit the shell
    ...

test> db.help()
  Database Class:
    db.createCollection()    Create a new collection
    db.dropDatabase()        Delete the database
    ...

test> db.students.help()
  Collection Class:
    db.collection.insertOne()    Insert a document
    db.collection.find()         Find documents
    ...
```

---

### 8. Renaming a Collection

**Command:**

```javascript
db.collection_name.renameCollection("new_collection_name");
```

**Description**: Renames an existing collection to a new name

**Example:**

```javascript
// Rename 'otherStaff' to 'faculty'
school> db.otherStaff.renameCollection("faculty")
{ ok: 1 }

// Verify the change
school> show collections
students
teachers
faculty  // ← Renamed from otherStaff
```

**Visual Representation:**

```
┌────────────────────────────────────────────────────┐
│          renameCollection()                        │
├────────────────────────────────────────────────────┤
│                                                    │
│  BEFORE:                                           │
│  school (database)                                 │
│  ├─ students                                       │
│  ├─ teachers                                       │
│  └─ otherStaff  ← Target collection                │
│                                                    │
│  Command:                                          │
│  db.otherStaff.renameCollection("faculty")         │
│                                                    │
│  AFTER:                                            │
│  school (database)                                 │
│  ├─ students                                       │
│  ├─ teachers                                       │
│  └─ faculty  ← Renamed collection                  │
│                                                    │
│  ✅ All documents preserved                         │
│  ✅ All indexes preserved                           │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Important Notes:**

```
┌────────────────────────────────────────────────────┐
│      renameCollection() - Important Notes          │
├────────────────────────────────────────────────────┤
│                                                    │
│  ✅ WHAT IS PRESERVED:                              │
│     • All documents in the collection              │
│     • All indexes                                  │
│     • Collection metadata                          │
│                                                    │
│  ⚠️  LIMITATIONS:                                   │
│     • Cannot rename across databases               │
│     • Target name must not already exist           │
│     • Cannot rename system collections             │
│     • Requires appropriate permissions             │
│                                                    │
│  ❌ WILL FAIL IF:                                   │
│     • Target collection name already exists        │
│     • Source collection doesn't exist              │
│     • Insufficient permissions                     │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Error Handling:**

```javascript
// Example: Trying to rename to existing collection
school> db.students.renameCollection("teachers")
MongoServerError: target namespace exists
// ❌ Fails because 'teachers' already exists

// Example: Renaming non-existent collection
school> db.nonExistent.renameCollection("newName")
MongoServerError: source namespace does not exist
// ❌ Fails because 'nonExistent' doesn't exist

// ✅ Correct: Rename to a new, unused name
school> db.students.renameCollection("pupils")
{ ok: 1 }
```

**Advanced Usage:**

```javascript
// Rename with dropTarget option (overwrites if exists)
db.oldCollection.renameCollection("newCollection", { dropTarget: true });

// This will:
// 1. Drop 'newCollection' if it exists
// 2. Rename 'oldCollection' to 'newCollection'
// ⚠️  Use with caution - data loss possible!
```

---

### 9. Important Note: Renaming Databases

**Key Limitation:**

```
┌────────────────────────────────────────────────────┐
│        DATABASE RENAMING NOT SUPPORTED             │
├────────────────────────────────────────────────────┤
│                                                    │
│  ❌ MongoDB does NOT support renaming databases    │
│                                                    │
│  Why?                                              │
│  • Database names are part of file system paths    │
│  • Would require moving large data files          │
│  • Could cause data corruption                     │
│  • Complex operation with many edge cases          │
│                                                    │
│  Workaround:                                       │
│  If you need to "rename" a database:               │
│                                                    │
│  1. Create new database with desired name          │
│  2. Copy all collections to new database           │
│  3. Verify data integrity                          │
│  4. Drop old database                              │
│                                                    │
│  ⚠️  This is manual and time-consuming for large   │
│     databases!                                     │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Manual Database "Rename" Process:**

```javascript
// Step 1: Create new database
use newDatabaseName

// Step 2: Copy collections (manual process)
// For each collection in old database:
db.oldDB.collection1.find().forEach(function(doc) {
  db.collection1.insert(doc);
});

// OR use aggregation pipeline (faster for large collections)
db.oldDB.collection1.aggregate([
  { $out: "newDatabaseName.collection1" }
]);

// Step 3: Verify data
use newDatabaseName
db.collection1.countDocuments()  // Compare with old count

// Step 4: Drop old database
use oldDatabaseName
db.dropDatabase()
```

**Better Approach - Plan Database Names Carefully:**

```javascript
// ✅ GOOD PRACTICE: Choose meaningful names from the start
use productionDB    // Clear, descriptive
use ecommerce_prod  // Environment-specific
use myapp_v2        // Version-specific

// ❌ AVOID: Generic or temporary names
use test           // Too generic
use temp_db        // Implies temporary
use db1            // Not descriptive
```

---

### 10. Deleting a Collection

**Command:**

```javascript
db.collection_name.drop();
```

**Description**: Permanently deletes a collection and all its documents

**Example:**

```javascript
// Delete the 'faculty' collection
school> db.faculty.drop()
true  // Returns true if successful

// Verify deletion
school> show collections
students
teachers
// faculty is gone
```

**Visual Representation:**

```
┌────────────────────────────────────────────────────┐
│              db.collection.drop()                  │
├────────────────────────────────────────────────────┤
│                                                    │
│  BEFORE:                                           │
│  school (database)                                 │
│  ├─ students                                       │
│  ├─ teachers                                       │
│  └─ faculty  ← Target for deletion                 │
│                                                    │
│  Command:                                          │
│  db.faculty.drop()                                 │
│                                                    │
│  AFTER:                                            │
│  school (database)                                 │
│  ├─ students                                       │
│  └─ teachers                                       │
│                                                    │
│  ❌ faculty collection completely removed           │
│  ❌ All documents in faculty are deleted            │
│  ❌ All indexes are deleted                         │
│  ⚠️  THIS OPERATION CANNOT BE UNDONE!              │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Return Values:**

```javascript
// Success - collection existed and was dropped
school > db.faculty.drop();
true;

// Collection doesn't exist
school > db.nonExistent.drop();
false;

// Cannot drop system collections
school > db.system.indexes.drop();
false;
```

**Important Warnings:**

```
┌────────────────────────────────────────────────────┐
│         drop() - Critical Warnings                 │
├────────────────────────────────────────────────────┤
│                                                    │
│  ⚠️  PERMANENT DELETION                             │
│     • Cannot be undone                             │
│     • No confirmation prompt                       │
│     • Immediate effect                             │
│                                                    │
│  ❌ WHAT IS DELETED:                                │
│     • All documents in the collection              │
│     • All indexes on the collection                │
│     • Collection metadata                          │
│                                                    │
│  💡 BEST PRACTICES:                                 │
│     1. Always backup before dropping               │
│     2. Double-check collection name                │
│     3. Verify you're in correct database           │
│     4. Consider archiving data first               │
│                                                    │
│  🔒 PRODUCTION SAFETY:                              │
│     • Restrict drop permissions                    │
│     • Use backup/restore procedures                │
│     • Implement soft-delete patterns               │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Safe Deletion Pattern:**

```javascript
// Step 1: Verify you're in the correct database
db.getName()
// Ensure it shows the database you intend

// Step 2: Check collection exists and view sample data
db.faculty.findOne()
// Review to ensure it's the right collection

// Step 3: Count documents (optional backup decision)
db.faculty.countDocuments()
// If many documents, consider backing up first

// Step 4: Backup (if needed)
// Export to JSON file using mongodump or mongoexport

// Step 5: Drop the collection
db.faculty.drop()

// Step 6: Verify deletion
show collections
// Confirm faculty is not in the list
```

---

### 11. Deleting a Database

**Command:**

```javascript
db.dropDatabase();
```

**Description**: Permanently deletes the current database and all its collections

**Example:**

```javascript
// Switch to the database you want to delete
test> use school
switched to db school

// Delete the entire database
school> db.dropDatabase()
{ ok: 1, dropped: 'school' }

// Verify deletion
school> show dbs
admin    40 KiB
config   12 KiB
local    40 KiB
// school is gone

// Note: Prompt still shows 'school' but database is deleted
school> show collections
// No collections (database is empty/deleted)
```

**Visual Representation:**

```
┌────────────────────────────────────────────────────┐
│            db.dropDatabase()                       │
├────────────────────────────────────────────────────┤
│                                                    │
│  BEFORE:                                           │
│  MongoDB Server                                    │
│  ├─ admin                                          │
│  ├─ config                                         │
│  ├─ local                                          │
│  └─ school  ← Target database                      │
│      ├─ students (collection)                      │
│      ├─ teachers (collection)                      │
│      └─ faculty (collection)                       │
│                                                    │
│  Command: (while in school database)               │
│  db.dropDatabase()                                 │
│                                                    │
│  AFTER:                                            │
│  MongoDB Server                                    │
│  ├─ admin                                          │
│  ├─ config                                         │
│  └─ local                                          │
│                                                    │
│  ❌ school database completely removed              │
│  ❌ All collections deleted                         │
│  ❌ All documents deleted                           │
│  ❌ All indexes deleted                             │
│  ⚠️  THIS OPERATION CANNOT BE UNDONE!              │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Return Values:**

```javascript
// Success - database existed and was dropped
school> db.dropDatabase()
{ ok: 1, dropped: 'school' }

// Database was already empty/deleted
test> db.dropDatabase()
{ ok: 1 }
// Note: No 'dropped' field if database didn't exist

// Cannot drop system databases (protected)
admin> db.dropDatabase()
MongoServerError: cannot drop admin database
```

**Critical Warnings:**

```
┌────────────────────────────────────────────────────┐
│      dropDatabase() - EXTREME CAUTION              │
├────────────────────────────────────────────────────┤
│                                                    │
│  🚨 NUCLEAR OPTION - USE WITH EXTREME CARE          │
│                                                    │
│  ⚠️  PERMANENT DELETION OF:                         │
│     • Entire database                              │
│     • ALL collections in the database              │
│     • ALL documents in all collections             │
│     • ALL indexes                                  │
│     • ALL metadata                                 │
│                                                    │
│  ❌ NO UNDO - NO RECOVERY - NO CONFIRMATION         │
│                                                    │
│  💡 WHEN TO USE:                                    │
│     • Development/testing environments             │
│     • Cleaning up temporary databases              │
│     • Complete reset required                      │
│                                                    │
│  🔒 PRODUCTION GUIDELINES:                          │
│     1. NEVER use in production without backup      │
│     2. Restrict permissions strictly               │
│     3. Implement approval workflows                │
│     4. Use database versioning                     │
│     5. Consider soft-delete alternatives           │
│                                                    │
│  ✅ SAFE ALTERNATIVES:                              │
│     • Drop individual collections instead          │
│     • Archive data before deletion                 │
│     • Use backup/restore procedures                │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Safe Database Deletion Procedure:**

```javascript
// ===== PRODUCTION-SAFE DATABASE DELETION =====

// Step 1: Verify current database
db.getName()
// Output: school
// ✓ Confirm this is the database you want to delete

// Step 2: List all collections
show collections
// Review all collections that will be deleted

// Step 3: Check database size
db.stats()
// Review dataSize, storageSize, indexSize
// Decide if backup is needed

// Step 4: Count total documents (optional)
let totalDocs = 0;
db.getCollectionNames().forEach(function(col) {
  let count = db[col].countDocuments();
  print(col + ": " + count + " documents");
  totalDocs += count;
});
print("Total documents: " + totalDocs);

// Step 5: Backup (CRITICAL for production)
// Use mongodump in separate terminal:
// $ mongodump --db=school --out=/backup/path

// Step 6: Final confirmation check
db.getName()
// One last check before deletion

// Step 7: Drop the database
db.dropDatabase()

// Step 8: Verify deletion
show dbs
// Confirm 'school' is not in the list

// Step 9: Switch to another database
use admin
// Good practice: don't stay in deleted database context
```

**Common Mistakes to Avoid:**

```javascript
// ❌ MISTAKE 1: Wrong database
test> db.dropDatabase()
// Dropped 'test' instead of intended database!

// ✅ CORRECT:
test> use school
school> db.getName()  // Verify
school
school> db.dropDatabase()

// ❌ MISTAKE 2: No backup
production> db.dropDatabase()
// All data lost forever!

// ✅ CORRECT:
// Always backup first in production
// $ mongodump --db=production

// ❌ MISTAKE 3: Dropping system databases
admin> db.dropDatabase()
// MongoDB prevents this, but don't attempt

// ✅ CORRECT:
// Never drop admin, config, or local databases
```

---

### 12. Syncing Shell Changes with Compass

**Important Note:**

```
┌────────────────────────────────────────────────────┐
│        Refreshing MongoDB Compass                  │
├────────────────────────────────────────────────────┤
│                                                    │
│  After performing operations in the shell,         │
│  MongoDB Compass does NOT auto-refresh             │
│                                                    │
│  Manual Refresh Required:                          │
│  • Click the refresh button in Compass             │
│  • Or press F5                                     │
│  • Or reconnect to the database                    │
│                                                    │
│  Why?                                              │
│  • Compass and Shell are separate applications     │
│  • Both connect to the same MongoDB server         │
│  • Changes made in one don't auto-update the other │
│                                                    │
│  Workflow:                                         │
│  1. Make changes in Shell (create/drop/etc.)       │
│  2. Switch to Compass                              │
│  3. Click refresh button                           │
│  4. See updated data                               │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Visual Workflow:**

```
┌────────────────────────────────────────────────────────────┐
│        Shell & Compass Synchronization                     │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Mongo Shell (CLI)              MongoDB Server             │
│  ┌─────────────────┐            ┌──────────────┐         │
│  │ school>         │────────────│   MongoDB    │         │
│  │ db.createColl   │   Create   │   Database   │         │
│  │ ection("xyz")   │────────────│              │         │
│  └─────────────────┘            └───────┬──────┘         │
│                                          │                 │
│                                          │                 │
│  MongoDB Compass (GUI)                   │                 │
│  ┌─────────────────┐                    │                 │
│  │ [Refresh 🔄]    │────────────────────┘                 │
│  │                 │      Query current state             │
│  │ Collections:    │                                      │
│  │ • students      │      Click refresh to see            │
│  │ • teachers      │      'xyz' collection                │
│  │ • xyz (NEW)     │                                      │
│  └─────────────────┘                                      │
│                                                            │
│  ⚠️  Without refresh, Compass shows old state              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

### 13. Shell Commands Quick Reference

```javascript
// ===== DATABASE OPERATIONS =====

// List all databases
show dbs
show databases

// Create/Switch to database
use database_name

// Get current database name
db.getName()
db  // Also returns current database

// Drop current database
db.dropDatabase()

// Database statistics
db.stats()


// ===== COLLECTION OPERATIONS =====

// Create collection
db.createCollection("collection_name")

// Create collection with options
db.createCollection("name", { capped: true, size: 5242880 })

// List all collections
show collections
db.getCollectionNames()  // Returns array
db.getCollectionInfos()  // Returns detailed info

// Rename collection
db.old_name.renameCollection("new_name")

// Drop collection
db.collection_name.drop()

// Collection statistics
db.collection_name.stats()


// ===== HELPFUL COMMANDS =====

// Check data type
typeof db  // Returns: object

// Clear screen
cls         // Method 1
Ctrl + L    // Method 2 (keyboard shortcut)

// Exit shell
.exit       // Method 1
exit()      // Method 2
Ctrl + C    // Method 3

// Get help
help                        // General help
db.help()                   // Database methods
db.collection.help()        // Collection methods

// Command history
// Use Up/Down arrow keys

// Auto-completion
// Press TAB key


// ===== SYSTEM INFORMATION =====

// MongoDB version
db.version()

// Server status
db.serverStatus()

// Current operations
db.currentOp()

// Host information
db.hostInfo()
```

---

### 14. Command Comparison Table

| Operation             | Shell Command                    | Compass Action             | Notes                           |
| --------------------- | -------------------------------- | -------------------------- | ------------------------------- |
| **List databases**    | `show dbs`                       | Main screen                | Compass auto-shows all DBs      |
| **Switch database**   | `use db_name`                    | Click database             | Compass: visual selection       |
| **Create collection** | `db.createCollection("name")`    | + icon / Create Collection | Both require database selection |
| **List collections**  | `show collections`               | Left sidebar               | Compass auto-displays           |
| **Rename collection** | `db.old.renameCollection("new")` | Not supported              | Must use Shell                  |
| **Drop collection**   | `db.collection.drop()`           | Right-click → Drop         | Both show confirmation          |
| **Drop database**     | `db.dropDatabase()`              | Right-click DB → Drop      | Extreme caution needed          |
| **Insert document**   | `db.col.insertOne({})`           | ADD DATA button            | Compass: JSON only              |
| **View documents**    | `db.col.find()`                  | Click collection           | Compass: visual display         |

---

### 15. Practical Scenarios

**Scenario 1: Setting up a Library System**

```javascript
// Step 1: Create database
use library

// Step 2: Create collections
db.createCollection("books")
db.createCollection("members")
db.createCollection("transactions")

// Step 3: Verify setup
show collections
// Output: books, members, transactions

// Step 4: View in Compass
// Refresh Compass to see new database and collections
```

**Scenario 2: Cleaning up Test Data**

```javascript
// Remove a test collection
db.test_collection.drop()

// Remove entire test database
use test_database
db.dropDatabase()

// Verify cleanup
show dbs  // test_database should be gone
```

**Scenario 3: Reorganizing Collections**

```javascript
// Current structure
show collections
// Output: user_data, user_info, user_profiles

// Standardize naming
db.user_data.renameCollection("users")
db.user_info.drop()  // Duplicate, not needed
db.user_profiles.renameCollection("profiles")

// Verify new structure
show collections
// Output: users, profiles
```

**Scenario 4: Database Migration Preparation**

```javascript
// Check current database
db.getName()
// Output: old_system

// Review all collections and sizes
db.stats()
db.getCollectionNames().forEach(function(col) {
  print(col + ": " + db[col.countDocuments() + " docs");
});

// Create new database
use new_system

// Collections will be copied separately
// (Migration process would go here)

// After migration, verify and cleanup
use old_system
db.dropDatabase()
```

---

## MongoDB CRUD Operations

CRUD operations are the fundamental ways to interact with data in MongoDB. Let's explore each operation in detail.

---

### Understanding Parameters vs Arguments

Before diving into CRUD operations, let's clarify an important programming concept:

```
┌────────────────────────────────────────────────────────┐
│       Parameters vs Arguments                          │
├────────────────────────────────────────────────────────┤
│                                                        │
│  PARAMETERS                                            │
│  • Used when declaring/defining a function             │
│  • Placeholder variables                               │
│  • Defined in function signature                       │
│                                                        │
│  function greet(name, age) {  ← Parameters             │
│    console.log(name, age);                             │
│  }                                                     │
│                                                        │
│  ARGUMENTS                                             │
│  • Used when calling/invoking a function               │
│  • Actual values passed to function                    │
│  • Provided during function call                       │
│                                                        │
│  greet("Varun", 20);  ← Arguments                      │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Example in MongoDB Context:**

```javascript
// Function Declaration (Parameters)
function insertDocument(document, options) {
  // document and options are PARAMETERS
  return db.collection.insertOne(document, options);
}

// Function Call (Arguments)
let teacher = { name: "abc", age: 23 };
let opts = { writeConcern: { w: 1 } };
insertDocument(teacher, opts); // teacher and opts are ARGUMENTS
```

---

### Insert Operations (CREATE)

#### 1. insertOne() - Insert Single Document

**Syntax:**

```javascript
db.collection_name.insertOne(
  { document }, // Required: Document to insert
  { options } // Optional: Insert options
);
```

**Parameters:**

1. **document** (Required): The document object to insert
2. **options** (Optional): Additional configuration options

**Description**: Inserts a single document into a collection.

**Example:**

```javascript
db.teachers.insertOne({
  name: "abc",
  age: 23,
  subject: "science",
});
```

**Response:**

```javascript
{
  acknowledged: true,
  insertedId: ObjectId("691d9b2b51082cb001735189")
}
```

**Response Properties:**

- `acknowledged`: Boolean indicating if the operation was successful
- `insertedId`: The unique ObjectId generated for the inserted document

```
┌────────────────────────────────────────────────────────┐
│          insertOne() Operation Flow                    │
├────────────────────────────────────────────────────────┤
│                                                        │
│  Input Document:                                       │
│  ┌──────────────────────────────────────┐            │
│  │ { name: "abc",                       │            │
│  │   age: 23,                           │            │
│  │   subject: "science" }               │            │
│  └──────────────────────────────────────┘            │
│                  ↓                                     │
│         MongoDB Processing                             │
│                  ↓                                     │
│  ┌──────────────────────────────────────┐            │
│  │ Stored Document:                     │            │
│  │ { _id: ObjectId("..."),              │            │
│  │   name: "abc",                       │            │
│  │   age: 23,                           │            │
│  │   subject: "science" }               │            │
│  └──────────────────────────────────────┘            │
│                  ↓                                     │
│  Response: { acknowledged: true,                       │
│              insertedId: ObjectId("...") }            │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Advanced Examples:**

```javascript
// Example 1: Insert with custom _id
db.teachers.insertOne({
  _id: "TEACHER001",
  name: "John Doe",
  subjects: ["Math", "Physics"],
});

// Example 2: Insert with nested objects
db.teachers.insertOne({
  name: "Jane Smith",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Mumbai",
    country: "India",
  },
  subjects: ["Chemistry", "Biology"],
});

// Example 3: Insert with array fields
db.teachers.insertOne({
  name: "Bob Wilson",
  qualifications: ["B.Sc", "M.Sc", "Ph.D"],
  yearsOfExperience: 15,
  specializations: [
    { subject: "Mathematics", level: "Advanced" },
    { subject: "Statistics", level: "Intermediate" },
  ],
});

// Example 4: Insert with date
db.teachers.insertOne({
  name: "Alice Brown",
  dateOfJoining: new Date("2024-01-15"),
  salary: 50000,
  isActive: true,
});
```

---

#### 2. insertMany() - Insert Multiple Documents

**Syntax:**

```javascript
db.collection_name.insertMany(
  [{}, {}, {}, ...],  // Required: Array of documents
  { options }          // Optional: Insert options
);
```

**Parameters:**

1. **documents** (Required): Array of document objects to insert
2. **options** (Optional): Additional configuration options

**Description**: Inserts multiple documents into a collection in a single operation.

**Example:**

```javascript
db.teachers.insertMany([
  { email: "test1@gmail.com" }, // doc1
  { email: "test2@gmail.com" }, // doc2
]);
```

**Response:**

```javascript
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("691d9b2b51082cb001735189"),
    '1': ObjectId("691d9b2b51082cb00173518a")
  }
}
```

```
┌────────────────────────────────────────────────────────┐
│         insertMany() Operation Flow                    │
├────────────────────────────────────────────────────────┤
│                                                        │
│  Input Array of Documents:                             │
│  ┌──────────────────────────────────────┐            │
│  │ [                                    │            │
│  │   { email: "test1@gmail.com" },      │            │
│  │   { email: "test2@gmail.com" }       │            │
│  │ ]                                    │            │
│  └──────────────────────────────────────┘            │
│                  ↓                                     │
│         MongoDB Processing                             │
│          (Bulk Insert)                                 │
│                  ↓                                     │
│  Stored Documents:                                     │
│  ┌──────────────────────────────────────┐            │
│  │ { _id: ObjectId("..."),              │            │
│  │   email: "test1@gmail.com" }         │            │
│  ├──────────────────────────────────────┤            │
│  │ { _id: ObjectId("..."),              │            │
│  │   email: "test2@gmail.com" }         │            │
│  └──────────────────────────────────────┘            │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Advanced Examples:**

```javascript
// Example 1: Insert multiple complete documents
db.students.insertMany([
  {
    name: "Varun",
    age: 20,
    grade: "A",
    subjects: ["English", "Math"],
  },
  {
    name: "Ashwin",
    age: 21,
    grade: "B+",
    subjects: ["Science", "History"],
  },
  {
    name: "Chetna",
    age: 22,
    grade: "A+",
    subjects: ["Math", "Physics"],
  },
]);

// Example 2: Insert with ordered option
db.products.insertMany(
  [
    { name: "Product A", price: 100 },
    { _id: "DUP123", name: "Product B", price: 200 },
    { _id: "DUP123", name: "Product C", price: 300 }, // Duplicate _id
    { name: "Product D", price: 400 },
  ],
  { ordered: true }
); // Stops at first error

// With ordered: false
db.products.insertMany(
  [
    { name: "Product A", price: 100 },
    { _id: "DUP123", name: "Product B", price: 200 },
    { _id: "DUP123", name: "Product C", price: 300 }, // Duplicate _id
    { name: "Product D", price: 400 },
  ],
  { ordered: false }
); // Continues, inserts A, B, and D

// Example 3: Insert large dataset
let books = [];
for (let i = 1; i <= 100; i++) {
  books.push({
    title: `Book ${i}`,
    author: `Author ${i}`,
    isbn: `ISBN-${i}`,
    publishedYear: 2020 + (i % 5),
  });
}
db.books.insertMany(books);
```

**Insert Options:**

```javascript
// writeConcern option
db.collection.insertMany([...documents], {
  writeConcern: { w: 1, j: true, wtimeout: 5000 },
});

// ordered option
db.collection.insertMany([...documents], {
  ordered: false, // Continue on error
});

// bypassDocumentValidation option
db.collection.insertMany([...documents], {
  bypassDocumentValidation: true,
});
```

---

**Key Differences: insertOne vs insertMany**

| Feature            | insertOne()                 | insertMany()                  |
| ------------------ | --------------------------- | ----------------------------- |
| **Input**          | Single document `{}`        | Array of documents `[{}, {}]` |
| **Output**         | Single ObjectId             | Multiple ObjectIds (object)   |
| **Performance**    | One network call per insert | One network call for all      |
| **Use Case**       | Adding single record        | Bulk data import              |
| **Efficiency**     | Lower for multiple inserts  | Higher for multiple inserts   |
| **Error Handling** | Simple                      | Can be ordered/unordered      |

---

### Read Operations (READ)

#### 3. findOne() - Fetch Single Document

**Syntax:**

```javascript
db.collection_name.findOne(
  { filter }, // Query criteria
  { projection }, // Field selection
  { options } // Additional options
);
```

**Parameters:**

1. **filter** (Query Object): Conditions to match documents
2. **projection** (Optional): Specifies which fields to include/exclude
3. **options** (Optional): Additional query options

**Description**: Retrieves the first document that matches the filter criteria.

```
┌────────────────────────────────────────────────────────┐
│          findOne() Parameters                          │
├────────────────────────────────────────────────────────┤
│                                                        │
│  1. Filter (Query Criteria)                            │
│     Specifies which document(s) to find                │
│     Example: { name: "abc" }                           │
│     Example: { age: { $gt: 20 } }                      │
│                                                        │
│  2. Projection (Field Selection)                       │
│     Specifies which fields to return                   │
│     Example: { name: 1, age: 1, _id: 0 }               │
│     1 = include, 0 = exclude                           │
│                                                        │
│  3. Options (Additional Settings)                      │
│     Extra configuration for the query                  │
│     Example: { sort: { age: -1 } }                     │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Examples:**

**Example 1: Basic Find**

```javascript
// Find a teacher named "abc"
db.teachers.findOne({ name: "abc" });

// Output:
{
  _id: ObjectId("691d9b2b51082cb001735189"),
  name: "abc",
  age: 23,
  subject: "science"
}
```

**Example 2: Find with Projection**

```javascript
// Find and return only name and subject (exclude _id)
db.teachers.findOne(
  { name: "abc" },
  { name: 1, subject: 1, _id: 0 }
);

// Output:
{
  name: "abc",
  subject: "science"
}
```

**Example 3: Find All Documents**

```javascript
// Find any document (returns first one)
db.teachers.findOne({});

// Empty filter {} matches all documents
// Returns the first document in the collection
```

**Example 4: Find with Query Operators**

```javascript
// Find teacher older than 20
db.teachers.findOne({ age: { $gt: 20 } });

// Find teacher with age 23 or 25
db.teachers.findOne({ age: { $in: [23, 25] } });
```

**Visual Workflow:**

```
┌────────────────────────────────────────────────────────┐
│          findOne() Operation Flow                      │
├────────────────────────────────────────────────────────┤
│                                                        │
│  Query: db.teachers.findOne({ name: "abc" })           │
│                                                        │
│  Step 1: Search Collection                             │
│  ┌──────────────────────────────────────┐            │
│  │ teachers Collection:                 │            │
│  │ [                                    │            │
│  │   { name: "xyz", age: 22 }  ✗       │            │
│  │   { name: "abc", age: 23 }  ✓ MATCH │            │
│  │   { name: "abc", age: 25 }  (skip)  │            │
│  │ ]                                    │            │
│  └──────────────────────────────────────┘            │
│                  ↓                                     │
│  Step 2: Return First Match                            │
│  ┌──────────────────────────────────────┐            │
│  │ { _id: ObjectId("..."),              │            │
│  │   name: "abc",                       │            │
│  │   age: 23 }                          │            │
│  └──────────────────────────────────────┘            │
│                                                        │
│  Note: Stops after finding first match                 │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**More Advanced Examples:**

```javascript
// Example 5: Nested field query
db.teachers.findOne({
  "address.city": "Mumbai",
});

// Example 6: Array field query
db.teachers.findOne({
  subjects: "Math", // Matches if "Math" is in subjects array
});

// Example 7: Multiple conditions (AND)
db.teachers.findOne({
  age: { $gte: 25 },
  subject: "Math",
});

// Example 8: OR conditions
db.teachers.findOne({
  $or: [{ age: { $lt: 25 } }, { subject: "Science" }],
});

// Example 9: Projection with nested fields
db.teachers.findOne({ name: "abc" }, { name: 1, "address.city": 1, _id: 0 });

// Example 10: Find by ObjectId
db.teachers.findOne({
  _id: ObjectId("691d9b2b51082cb001735189"),
});
```

---

## BSON and ObjectId

### What is BSON?

**BSON** stands for **Binary JSON (JavaScript Object Notation)**

```
┌────────────────────────────────────────────────────────┐
│              BSON (Binary JSON)                        │
├────────────────────────────────────────────────────────┤
│                                                        │
│  JSON                    BSON                          │
│  ────                    ────                          │
│  Text Format      →      Binary Format                 │
│  Human Readable   →      Machine Readable              │
│  Slower           →      Faster                        │
│  Limited Types    →      Extended Types                │
│                                                        │
│  ┌──────────────┐       ┌──────────────┐             │
│  │     JSON     │       │     BSON     │             │
│  ├──────────────┤       ├──────────────┤             │
│  │ String       │       │ String       │             │
│  │ Number       │       │ Int32        │             │
│  │ Boolean      │       │ Int64        │             │
│  │ Array        │       │ Double       │             │
│  │ Object       │       │ Boolean      │             │
│  │ null         │       │ Date         │             │
│  │              │       │ ObjectId     │             │
│  │              │       │ Binary       │             │
│  │              │       │ Undefined    │             │
│  │              │       │ Regex        │             │
│  └──────────────┘       └──────────────┘             │
│                                                        │
└────────────────────────────────────────────────────────┘
```

#### Key Characteristics of BSON:

1. **Binary Encoded**: BSON is a binary-encoded serialization of JSON-like documents
2. **Extended Data Types**: Supports additional data types beyond JSON
3. **Storage Format**: Used internally by MongoDB to store and retrieve data
4. **Not Human Readable**: Cannot be read directly without decoding
5. **Performance**: Faster to parse and generate than text-based JSON

**BSON Data Types:**

```javascript
// Examples of BSON-specific data types
{
  _id: ObjectId("507f1f77bcf86cd799439011"),      // ObjectId
  name: "Varun",                                   // String
  age: 23,                                         // Int32
  salary: 50000.50,                                // Double
  isActive: true,                                  // Boolean
  joinDate: new Date("2024-01-15"),                // Date
  profile: undefined,                              // Undefined
  data: BinData(0, "base64string"),                // Binary
  pattern: /test/i                                 // Regex
}
```

**Why BSON?**

- Efficient storage and retrieval
- Supports rich data types
- Traversable (can skip fields)
- Fast encoding/decoding

---

### ObjectId Explained

**ObjectId** is a 12-byte BSON type used as a unique identifier for documents.

**Format:** `ObjectId("691d9c8f51082cb00173518a")`

#### ObjectId Characteristics:

1. **Unique**: Every ObjectId is unique across the entire database
2. **BSON Data Type**: A special data type in BSON format
3. **12 Bytes (96 bits)**: Represented as 24 hexadecimal characters
4. **Auto-generated**: MongoDB creates it if not provided
5. **Primary Key**: Acts as the default primary key (`_id` field)
6. **Ordered**: Generally increases over time (can be used for sorting)

```
┌────────────────────────────────────────────────────────┐
│          ObjectId Structure (12 bytes)                 │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ObjectId("691d9c8f51082cb00173518a")                  │
│           └─────────┬─────────┘                        │
│             24 hex characters                          │
│              (12 bytes)                                │
│                                                        │
│  Breakdown:                                            │
│  ┌──────────────────────────────────────────┐        │
│  │                                          │        │
│  │  691d9c8f51  |  082cb001  |  73518a      │        │
│  │      │             │            │         │        │
│  │   5 bytes      4 bytes     3 bytes       │        │
│  │      │             │            │         │        │
│  │  Timestamp      PUI       Counter        │        │
│  │                                          │        │
│  └──────────────────────────────────────────┘        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

#### ObjectId Components:

**1. Timestamp (5 bytes) - `691d9c8f51`**

- Represents the creation time of the ObjectId
- Unix timestamp in seconds since epoch
- Provides built-in sorting by creation time
- Makes ObjectIds roughly sortable by creation order

**2. Process Unique Identifier / PUI (4 bytes) - `082cb001`**

- Combination of Machine ID and Process ID
- Ensures uniqueness across different machines
- Components:
  - Machine identifier (3 bytes)
  - Process ID (2 bytes, but uses 4 total with machine ID)

**3. Counter (3 bytes) - `73518a`**

- Starts with a random value
- Incremented by 1 for each new document
- Ensures uniqueness when multiple documents created in same second
- Resets when process restarts

```
┌────────────────────────────────────────────────────────────────────┐
│         ObjectId Component Breakdown (Detailed)                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ObjectId: "691d9c8f51082cb00173518a"                              │
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Part 1: Timestamp (5 bytes = 10 hex chars)                  │ │
│  │ "691d9c8f51"                                                │ │
│  │                                                             │ │
│  │ • Unix timestamp (seconds since 1970-01-01)                │ │
│  │ • Creation time: Can be extracted programmatically         │ │
│  │ • Example: 1730000000 seconds = ~2024-10-27                │ │
│  │ • Useful for: Sorting, date-based queries                  │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Part 2: PUI - Process Unique Identifier (4 bytes = 8 hex)  │ │
│  │ "082cb001"                                                  │ │
│  │                                                             │ │
│  │ Breakdown:                                                  │ │
│  │ • Machine ID (first 3 bytes): Identifies the machine       │ │
│  │ • Process ID (next 2 bytes): Identifies the process        │ │
│  │ • Ensures: No collision across different servers/processes │ │
│  │ • Use case: Distributed systems, replica sets              │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Part 3: Counter (3 bytes = 6 hex chars)                    │ │
│  │ "73518a"                                                    │ │
│  │                                                             │ │
│  │ • Starts with: Random value at process start               │ │
│  │ • Increments: +1 for each new ObjectId                     │ │
│  │ • Max value: 16,777,215 (0xFFFFFF)                         │ │
│  │ • Ensures: Uniqueness within same timestamp & process      │ │
│  │ • Example: 73518a → 73518b → 73518c (hex increment)        │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

#### ObjectId Size Calculation:

```
┌────────────────────────────────────────────────────────┐
│          ObjectId Size Breakdown                       │
├────────────────────────────────────────────────────────┤
│                                                        │
│  Total: 12 bytes = 96 bits                             │
│                                                        │
│  Timestamp:      5 bytes × 8 bits = 40 bits            │
│  PUI:            4 bytes × 8 bits = 32 bits            │
│  Counter:        3 bytes × 8 bits = 24 bits            │
│                                    ─────────           │
│  Total:         12 bytes          = 96 bits            │
│                                                        │
│  String Representation:                                │
│  • 24 hexadecimal characters                           │
│  • Each hex char represents 4 bits (nibble)            │
│  • 24 chars × 4 bits = 96 bits ✓                       │
│                                                        │
└────────────────────────────────────────────────────────┘
```

#### Working with ObjectId:

**Example 1: Extracting Timestamp**

```javascript
// Get timestamp from ObjectId
let id = ObjectId("691d9c8f51082cb00173518a");
let timestamp = id.getTimestamp();

console.log(timestamp);
// Output: ISODate("2024-10-27T12:30:45.000Z")
```

**Example 2: Querying by ObjectId**

```javascript
// Find document by ObjectId
db.teachers.findOne({ _id: ObjectId("691d9c8f51082cb00173518a") });

// Find documents created after a certain time
let startTime = new Date("2024-01-01");
let minId = ObjectId(
  Math.floor(startTime / 1000).toString(16) + "0000000000000000"
);
db.teachers.find({ _id: { $gte: minId } });
```

**Example 3: Creating Custom ObjectId**

```javascript
// Insert with custom ObjectId
db.teachers.insertOne({
  _id: ObjectId(), // Explicitly generate new ObjectId
  name: "xyz",
});

// Insert with specific _id (not recommended)
db.teachers.insertOne({
  _id: "custom-id-123", // String instead of ObjectId
  name: "abc",
});
```

#### Why ObjectId is Useful:

```
┌────────────────────────────────────────────────────────┐
│          ObjectId Benefits                             │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ✅ Globally Unique                                     │
│     No collisions even across distributed systems      │
│                                                        │
│  ✅ No Central Coordination                             │
│     Each server can generate independently             │
│                                                        │
│  ✅ Embedded Timestamp                                  │
│     Know when document was created                     │
│                                                        │
│  ✅ Sortable                                            │
│     Roughly ordered by creation time                   │
│                                                        │
│  ✅ Fast Generation                                     │
│     No database lookup needed                          │
│                                                        │
│  ✅ Compact                                             │
│     Only 12 bytes (vs UUID 16 bytes)                   │
│                                                        │
│  ✅ Index Friendly                                      │
│     Works well as primary key                          │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## MongoDB CRUD Operations Summary

### Quick Reference Table

| Operation  | Method         | Purpose                        | Returns                         |
| ---------- | -------------- | ------------------------------ | ------------------------------- |
| **Create** | `insertOne()`  | Insert single document         | `{ acknowledged, insertedId }`  |
| **Create** | `insertMany()` | Insert multiple documents      | `{ acknowledged, insertedIds }` |
| **Read**   | `findOne()`    | Find first matching document   | Document or null                |
| **Read**   | `find()`       | Find all matching documents    | Cursor (array of documents)     |
| **Update** | `updateOne()`  | Update first matching document | Update result                   |
| **Update** | `updateMany()` | Update all matching documents  | Update result                   |
| **Delete** | `deleteOne()`  | Delete first matching document | Delete result                   |
| **Delete** | `deleteMany()` | Delete all matching documents  | Delete result                   |

---

## Common Query Operators

### Comparison Operators

| Operator | Description           | Example                          |
| -------- | --------------------- | -------------------------------- |
| `$eq`    | Equal to              | `{ age: { $eq: 25 } }`           |
| `$ne`    | Not equal to          | `{ age: { $ne: 25 } }`           |
| `$gt`    | Greater than          | `{ age: { $gt: 25 } }`           |
| `$gte`   | Greater than or equal | `{ age: { $gte: 25 } }`          |
| `$lt`    | Less than             | `{ age: { $lt: 25 } }`           |
| `$lte`   | Less than or equal    | `{ age: { $lte: 25 } }`          |
| `$in`    | Value in array        | `{ age: { $in: [20, 25, 30] } }` |
| `$nin`   | Value not in array    | `{ age: { $nin: [20, 25] } }`    |

### Logical Operators

| Operator | Description   | Example                                                  |
| -------- | ------------- | -------------------------------------------------------- |
| `$and`   | AND condition | `{ $and: [{ age: { $gt: 20 } }, { age: { $lt: 30 } }] }` |
| `$or`    | OR condition  | `{ $or: [{ age: 20 }, { age: 25 }] }`                    |
| `$not`   | NOT condition | `{ age: { $not: { $eq: 25 } } }`                         |
| `$nor`   | NOR condition | `{ $nor: [{ age: 20 }, { age: 25 }] }`                   |

### Element Operators

| Operator  | Description      | Example                        |
| --------- | ---------------- | ------------------------------ |
| `$exists` | Field exists     | `{ email: { $exists: true } }` |
| `$type`   | Field type check | `{ age: { $type: "number" } }` |

### Array Operators

| Operator     | Description               | Example                                             |
| ------------ | ------------------------- | --------------------------------------------------- |
| `$all`       | All elements match        | `{ subjects: { $all: ["Math", "Science"] } }`       |
| `$elemMatch` | Element matches condition | `{ scores: { $elemMatch: { $gte: 80, $lt: 90 } } }` |
| `$size`      | Array size                | `{ subjects: { $size: 3 } }`                        |

---

## Projection Syntax

```javascript
// Include fields (1 means include)
db.collection.find({}, { name: 1, age: 1 });
// Returns: _id, name, age (_id is included by default)

// Exclude _id
db.collection.find({}, { name: 1, age: 1, _id: 0 });
// Returns: name, age only

// Exclude fields (0 means exclude)
db.collection.find({}, { password: 0, secretKey: 0 });
// Returns: all fields except password and secretKey

// Cannot mix include and exclude (except for _id)
db.collection.find({}, { name: 1, age: 0 }); // ❌ Error!
db.collection.find({}, { name: 1, _id: 0 }); // ✅ Valid
```

---

## Best Practices

### General Best Practices

1. **Always use meaningful collection and field names**

   - Use camelCase or snake_case consistently
   - Be descriptive but concise

2. **Design schema based on access patterns**

   - Consider how you'll query the data
   - Denormalize when beneficial for read performance

3. **Use indexes for frequently queried fields**

   ```javascript
   db.collection.createIndex({ email: 1 });
   db.collection.createIndex({ name: 1, age: -1 });
   ```

4. **Limit document size**

   - MongoDB document size limit: 16MB
   - Consider splitting large documents

5. **Use projections to reduce data transfer**
   - Only fetch fields you need
   - Reduces network overhead

### Insert Best Practices

```javascript
// ✅ GOOD: Validate data before inserting
let newUser = {
  name: "John Doe",
  email: "john@example.com",
  age: 25
};

// Check if email already exists
let existing = db.users.findOne({ email: newUser.email });
if (!existing) {
  db.users.insertOne(newUser);
}

// ✅ GOOD: Use bulk inserts for multiple documents
db.users.insertMany([...], { ordered: false });

// ❌ BAD: Multiple individual inserts
// Don't do this:
db.users.insertOne(doc1);
db.users.insertOne(doc2);
db.users.insertOne(doc3);
```

### Query Best Practices

```javascript
// ✅ GOOD: Use specific queries
db.users.findOne({ email: "specific@email.com" });

// ❌ BAD: Fetch all and filter in application
// Don't do this:
let allUsers = db.users.find({});
let user = allUsers.filter((u) => u.email === "specific@email.com");

// ✅ GOOD: Use projections
db.users.findOne({ email: "user@example.com" }, { name: 1, email: 1, _id: 0 });

// ❌ BAD: Fetch all fields when you only need a few
// Don't do this:
let user = db.users.findOne({ email: "user@example.com" });
console.log(user.name, user.email); // Only using 2 fields
```

---

## Troubleshooting Common Issues

### Issue 1: ObjectId String vs ObjectId Object

```javascript
// ❌ WRONG: Using string
db.collection.findOne({ _id: "691d9c8f51082cb00173518a" });
// Won't find the document

// ✅ CORRECT: Using ObjectId()
db.collection.findOne({ _id: ObjectId("691d9c8f51082cb00173518a") });
```

### Issue 2: Projection Mixing Include/Exclude

```javascript
// ❌ WRONG: Mixing 1 and 0 (except _id)
db.collection.find({}, { name: 1, age: 0 });
// Error: Cannot mix inclusion and exclusion

// ✅ CORRECT: All include or all exclude
db.collection.find({}, { name: 1, email: 1, _id: 0 });
db.collection.find({}, { password: 0, secretKey: 0 });
```

### Issue 3: Case Sensitivity

```javascript
// MongoDB queries are case-sensitive
db.users.findOne({ name: "john" }); // Won't match "John"
db.users.findOne({ name: "John" }); // Matches "John"

// Use regex for case-insensitive search
db.users.findOne({ name: /john/i }); // Matches "john", "John", "JOHN"
```

### Issue 4: Nested Field Queries

```javascript
// ❌ WRONG: Dot notation without quotes
db.users.findOne({ address.city: "Mumbai" })  // Syntax error

// ✅ CORRECT: Dot notation with quotes
db.users.findOne({ "address.city": "Mumbai" })
```

---

## Summary

### Key Takeaways:

1. **MongoDB Shell Commands**:

   - `show dbs` - List databases
   - `use dbName` - Create/switch database
   - `db.createCollection()` - Create collection
   - `show collections` - List collections
   - `db.collection.renameCollection()` - Rename collection
   - `db.collection.drop()` - Delete collection
   - `db.dropDatabase()` - Delete database

2. **MongoDB Server**:

   - Start: `net start mongodb` (Admin CMD)
   - Stop: `net stop mongodb` (Admin CMD)
   - Default port: 27017

3. **Data Formats**:

   - **BSON**: Binary JSON used internally
   - **ObjectId**: 12-byte unique identifier
   - Components: Timestamp (5) + PUI (4) + Counter (3)

4. **CRUD Operations**:

   - **Create**: `insertOne()`, `insertMany()`
   - **Read**: `findOne()`, `find()`
   - **Update**: `updateOne()`, `updateMany()`
   - **Delete**: `deleteOne()`, `deleteMany()`

5. **Shell Shortcuts**:

   - TAB: Auto-completion
   - ↑/↓: Command history
   - `cls` or Ctrl+L: Clear screen
   - `.exit`: Exit shell

6. **Best Practices**:
   - Always backup before dropping
   - Use projections to optimize queries
   - Index frequently queried fields
   - Design schema based on access patterns
   - Validate data before inserting

---

# MongoDB Shell Commands and Operations - Complete Reference

## Table of Contents

- [MongoDB Shell Commands](#mongodb-shell-commands)
  - [Database Operations](#database-operations)
  - [Collection Operations](#collection-operations)
  - [Shell Shortcuts](#shell-shortcuts)
- [MongoDB Import Command](#mongodb-import-command)
- [Read Operations (Detailed)](#read-operations-detailed)
  - [findOne() - Advanced Usage](#findone---advanced-usage)
  - [find() - Multiple Documents](#find---multiple-documents)
- [Delete Operations](#delete-operations)
  - [deleteOne()](#deleteone)
  - [deleteMany()](#deletemany)
- [Update Operations](#update-operations)
  - [updateOne()](#updateone)
  - [updateMany()](#updatemany)
- [MongoDB Operators](#mongodb-operators)
  - [Query Operators](#query-operators)
  - [Update Operators](#update-operators)
  - [Aggregation Operators](#aggregation-operators)
  - [Projection Operators](#projection-operators)
  - [Geospatial Operators](#geospatial-operators)

---

## MongoDB Shell Commands

### Database Operations

#### 1. List All Databases

**Command:**

```javascript
show dbs
// OR
show databases
```

**Description**: Displays all databases in MongoDB server with their sizes.

**Example Output:**

```
admin       40.00 KiB
config      12.00 KiB
local       40.00 KiB
library    108.00 KiB
school      72.00 KiB
```

```
┌────────────────────────────────────────────────────┐
│         List Databases Command                     │
├────────────────────────────────────────────────────┤
│                                                    │
│  Command:  show dbs                                │
│            show databases                          │
│                                                    │
│  Shows:    • Database names                        │
│            • Database sizes                        │
│            • Only non-empty databases              │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

#### 2. Create or Switch Database

**Command:**

```javascript
use database_name
```

**Behavior:**

- If the database **exists**: Switches to that database
- If the database **doesn't exist**: Creates a new database

**Example:**

```javascript
use library
// Output: switched to db library
```

**Important Notes:**

- The new database won't appear in `show dbs` until you insert data into it
- Empty databases are not saved permanently

```
┌────────────────────────────────────────────────────┐
│         Create/Switch Database Flow                │
├────────────────────────────────────────────────────┤
│                                                    │
│  use library                                       │
│      │                                             │
│      ├─→ Does "library" exist?                     │
│      │                                             │
│      ├─→ YES: Switch to library database           │
│      │         (switched to db library)            │
│      │                                             │
│      └─→ NO:  Create new database "library"        │
│                (switched to db library)            │
│                                                    │
│  Note: New database won't show in 'show dbs'       │
│        until first collection/document is created  │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Shell Prompt Indicator:**

```
test>           ← Default database prompt
library>        ← After "use library"
school>         ← After "use school"
```

> **Note**: The shell prompt always shows the current active database. By default, it's set to `test` database.

---

#### 3. Refresh Compass Application

**Important**: After performing operations in the shell, refresh MongoDB Compass to see changes.

```
┌────────────────────────────────────────────────────┐
│         Shell ↔ Compass Synchronization            │
├────────────────────────────────────────────────────┤
│                                                    │
│  1. Execute command in Shell                       │
│     mongosh> db.students.insertOne({...})          │
│                                                    │
│  2. Refresh Compass to see changes                 │
│     Click refresh button in Compass                │
│                                                    │
│  Why? Shell and Compass are separate interfaces    │
│       Changes need manual refresh                  │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

### Collection Operations

#### 3. Create Collection

**Command:**

```javascript
db.createCollection("collection_name");
```

**What is `db`?**

- `db` is an **object** representing the current database
- It provides methods to interact with the database

**Example:**

```javascript
db.createCollection("books");
// Output:
{
  ok: 1;
}
```

**Multiple Collections Example:**

```javascript
// Create school database with 3 collections
use school

db.createCollection("students")
db.createCollection("teachers")
db.createCollection("otherStaff")
```

```
┌────────────────────────────────────────────────────┐
│         Database Object Structure                  │
├────────────────────────────────────────────────────┤
│                                                    │
│  db                    ← Object (current database) │
│   │                                                │
│   ├─ createCollection()                            │
│   ├─ dropDatabase()                                │
│   ├─ getCollectionNames()                          │
│   │                                                │
│   └─ [collection_name]  ← Collection object        │
│        │                                           │
│        ├─ insertOne()                              │
│        ├─ find()                                   │
│        ├─ updateOne()                              │
│        └─ deleteOne()                              │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

#### 4. Display All Collections

**Command:**

```javascript
show collections
```

**Description**: Lists all collections in the current database.

**Example:**

```javascript
school> show collections
students
teachers
otherStaff
```

---

### Shell Shortcuts

**Keyboard Shortcuts for Mongo Shell:**

```
┌────────────────────────────────────────────────────┐
│         Mongo Shell Shortcuts                      │
├────────────────────────────────────────────────────┤
│                                                    │
│  1. TAB                                            │
│     • Auto-complete commands                       │
│     • Show available methods                       │
│     Example: db.[TAB] → shows all db methods       │
│                                                    │
│  2. ↑ / ↓ Arrow Keys                               │
│     • Navigate through command history             │
│     • ↑ = Previous command                         │
│     • ↓ = Next command                             │
│                                                    │
│  3. cls  OR  Ctrl+L                                │
│     • Clear the shell screen                       │
│     • Commands: cls  or  Ctrl+L                    │
│                                                    │
│  4. Ctrl+C                                         │
│     • Exit mongosh                                 │
│     • Or type: .exit                               │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Practical Examples:**

```javascript
// 1. Auto-complete with TAB
db.stu[TAB]          // Completes to: db.students
db.students.find[TAB] // Shows: findOne(), find(), etc.

// 2. Navigate history with arrow keys
↑  // Previous command: db.students.find()
↑  // Before that: use school
↓  // Next command

// 3. Clear screen
cls                   // Clear screen
// OR
[Ctrl+L]             // Clear screen
```

---

#### 5. Rename Collection

**Command:**

```javascript
db.collection_name.renameCollection("new_collection_name");
```

**Example:**

```javascript
db.otherStaff.renameCollection("faculty");
// Output:
{
  ok: 1;
}
```

**Visual Workflow:**

```
┌────────────────────────────────────────────────────┐
│         Rename Collection Process                  │
├────────────────────────────────────────────────────┤
│                                                    │
│  Before:                                           │
│  school (database)                                 │
│    ├─ students                                     │
│    ├─ teachers                                     │
│    └─ otherStaff     ← To be renamed               │
│                                                    │
│  Command:                                          │
│  db.otherStaff.renameCollection("faculty")         │
│                                                    │
│  After:                                            │
│  school (database)                                 │
│    ├─ students                                     │
│    ├─ teachers                                     │
│    └─ faculty        ← Renamed                     │
│                                                    │
└────────────────────────────────────────────────────┘
```

> **⚠️ Important**: In MongoDB, **renaming a database is NOT possible**. You must create a new database and migrate data manually.

---

#### 6. Delete Collection

**Command:**

```javascript
db.collection_name.drop();
```

**Description**: Permanently deletes a collection and all its documents.

**Example:**

```javascript
db.faculty.drop();
// Output:
true; // Successfully deleted
```

**Response Values:**

- `true`: Collection was deleted successfully
- `false`: Collection doesn't exist or deletion failed

```
┌────────────────────────────────────────────────────┐
│         Delete Collection Warning                  │
├────────────────────────────────────────────────────┤
│                                                    │
│  ⚠️  WARNING: This operation is PERMANENT!         │
│                                                    │
│  db.faculty.drop()                                 │
│      │                                             │
│      ├─→ Deletes collection "faculty"              │
│      ├─→ Deletes ALL documents inside              │
│      └─→ Cannot be undone!                         │
│                                                    │
│  Before dropping:                                  │
│  • Backup important data                           │
│  • Confirm collection name                         │
│  • Consider using deleteMany() instead             │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

#### 7. Delete Database

**Command:**

```javascript
db.dropDatabase();
```

**Description**: Deletes the current database and all its collections.

**Example:**

```javascript
use school
db.dropDatabase()
// Output:
{ ok: 1, dropped: 'school' }
```

**Complete Workflow:**

```javascript
// Step 1: Switch to database you want to delete
use school

// Step 2: Drop the database
db.dropDatabase()

// Step 3: Verify deletion
show dbs    // 'school' should not appear
```

```
┌────────────────────────────────────────────────────┐
│         Delete Database Warning                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  ⚠️  EXTREME WARNING: This operation is PERMANENT! │
│                                                    │
│  db.dropDatabase()                                 │
│      │                                             │
│      ├─→ Deletes ENTIRE current database           │
│      ├─→ Deletes ALL collections                   │
│      ├─→ Deletes ALL documents                     │
│      └─→ Cannot be undone!                         │
│                                                    │
│  Safety Checklist:                                 │
│  ☐ Confirm current database (check prompt)         │
│  ☐ Backup all important data                       │
│  ☐ Get approval if in production                   │
│  ☐ Double-check database name                      │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## MongoDB Import Command

### mongoimport - Bulk Data Import

**Command Syntax:**

```bash
mongoimport "file_path" -d database_name -c collection_name --jsonArray
```

**Parameters:**

- **file_path**: Full path to the JSON file
- **-d**: Specifies the target database name
- **-c**: Specifies the target collection name
- **--jsonArray**: Flag indicating the file contains a JSON array

**Example:**

```bash
mongoimport "C:\Users\ASUS\Desktop\Classes\emp.dept.json" -d demo23 -c coll1 --jsonArray
```

**Breakdown:**

```
┌──────────────────────────────────────────────────────────────────┐
│         mongoimport Command Structure                            │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  mongoimport "C:\Users\ASUS\Desktop\Classes\emp.dept.json"      │
│               └─────────────┬──────────────┘                     │
│                        File Path                                 │
│                                                                  │
│  -d demo23                                                       │
│   └───┬───┘                                                      │
│    Database                                                      │
│                                                                  │
│  -c coll1                                                        │
│   └───┬──┘                                                       │
│   Collection                                                     │
│                                                                  │
│  --jsonArray                                                     │
│  └─────┬─────┘                                                   │
│    Format Flag                                                   │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**File Format Requirements:**

**For --jsonArray flag:**

```json
[
  { "empName": "John", "sal": 5000, "job": "Manager" },
  { "empName": "Jane", "sal": 4000, "job": "Developer" },
  { "empName": "Bob", "sal": 3000, "job": "Clerk" }
]
```

**Without --jsonArray flag:**

```json
{ "empName": "John", "sal": 5000, "job": "Manager" }
{ "empName": "Jane", "sal": 4000, "job": "Developer" }
{ "empName": "Bob", "sal": 3000, "job": "Clerk" }
```

**Success Output:**

```
2024-01-15T10:30:45.123+0000    connected to: mongodb://localhost/
2024-01-15T10:30:45.234+0000    3 document(s) imported successfully. 0 document(s) failed to import.
```

```
┌────────────────────────────────────────────────────┐
│         mongoimport Workflow                       │
├────────────────────────────────────────────────────┤
│                                                    │
│  Step 1: Prepare JSON file                        │
│  ┌────────────────────────────────┐               │
│  │ emp.dept.json                  │               │
│  │ [                              │               │
│  │   { "name": "...", ... },      │               │
│  │   { "name": "...", ... }       │               │
│  │ ]                              │               │
│  └────────────────────────────────┘               │
│                 ↓                                  │
│                                                    │
│  Step 2: Run mongoimport command                  │
│  mongoimport "path" -d demo23 -c coll1 --jsonArray│
│                 ↓                                  │
│                                                    │
│  Step 3: Data imported to MongoDB                 │
│  ┌────────────────────────────────┐               │
│  │ Database: demo23               │               │
│  │  └─ Collection: coll1          │               │
│  │      ├─ Document 1              │               │
│  │      ├─ Document 2              │               │
│  │      └─ Document 3              │               │
│  └────────────────────────────────┘               │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Common Options:**

| Option         | Description                         | Example                         |
| -------------- | ----------------------------------- | ------------------------------- |
| `--drop`       | Drop collection before importing    | `mongoimport ... --drop`        |
| `--type`       | File type (json, csv, tsv)          | `mongoimport ... --type=csv`    |
| `--headerline` | Use first line as field names (CSV) | `mongoimport ... --headerline`  |
| `--mode`       | Insert mode (insert, upsert, merge) | `mongoimport ... --mode=upsert` |

---

## Read Operations (Detailed)

### findOne() - Advanced Usage

**Complete Syntax:**

```javascript
db.collection_name.findOne({ filter }, { projection }, { options });
```

#### Parameter Details

**1. Filter Parameter**

- **Purpose**: Conditions to match documents
- **Type**: Query object
- **Example**: `{ empName: "jones" }`

**2. Projection Parameter**

- **Purpose**: Select which fields to display or hide
- **Type**: Projection object
- **Syntax**: `{ fieldName: 1, fieldName: 0 }`
- **Values**:
  - `1` = Display/Include the field
  - `0` = Hide/Exclude the field

**Important Projection Rules:**

```
┌────────────────────────────────────────────────────┐
│         Projection Rules                           │
├────────────────────────────────────────────────────┤
│                                                    │
│  Rule 1: _id field behavior                        │
│  • Always displayed by default                     │
│  • Must explicitly set to 0 to hide                │
│  • Example: { name: 1, _id: 0 }                    │
│                                                    │
│  Rule 2: Inclusion vs Exclusion                    │
│  • Cannot mix inclusion (1) and exclusion (0)      │
│  • Exception: _id can be excluded in inclusion     │
│                                                    │
│  ✅ Valid:                                          │
│     { name: 1, job: 1, _id: 0 }     // Inclusion   │
│     { name: 0, job: 0 }             // Exclusion   │
│                                                    │
│  ❌ Invalid:                                        │
│     { name: 1, job: 0 }             // Mixed       │
│     Error: Cannot do exclusion in inclusion        │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

### MongoDB Case Sensitivity

> **⚠️ Important**: MongoDB commands are **case-sensitive**!

```javascript
// ✅ Correct
db.emp.findOne();
db.emp.insertOne();

// ❌ Wrong
db.emp.FindOne(); // Error: FindOne is not a function
db.emp.FINDONE(); // Error: FINDONE is not a function
```

---

### findOne() Examples

#### Example 1: Find by Name

**Question**: Find the details of employee whose name is "jones"

```javascript
db.emp.findOne({ empName: "jones" });
```

**Output:**

```javascript
{
  _id: ObjectId("691d9c8f51082cb00173518a"),
  empName: "jones",
  job: "clerk",
  sal: 3000,
  deptNo: 20
}
```

---

#### Example 2: Empty Filter

**Behavior**: Returns the **first document** in the collection

```javascript
// Both are equivalent
db.emp.findOne({});
db.emp.findOne();
```

```
┌────────────────────────────────────────────────────┐
│         Empty Filter Behavior                      │
├────────────────────────────────────────────────────┤
│                                                    │
│  Collection: emp                                   │
│  ┌─────────────────────────────────────────┐      │
│  │ Document 1  ← RETURNED                  │      │
│  │ Document 2                              │      │
│  │ Document 3                              │      │
│  │ Document 4                              │      │
│  └─────────────────────────────────────────┘      │
│                                                    │
│  db.emp.findOne({})  → Returns Document 1         │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

#### Example 3: Projection Usage

**Question**: Display only the job and salary of employee whose name is "jones"

```javascript
db.emp.findOne(
  { empName: "jones" }, // Filter
  { sal: 1, job: 1, _id: 0 } // Projection
);
```

**Output:**

```javascript
{
  job: "clerk",
  sal: 3000
}
```

**Explanation:**

- `sal: 1` → Include salary field
- `job: 1` → Include job field
- `_id: 0` → Exclude \_id field (otherwise shown by default)

---

#### Example 4: Projection Error

**Invalid Projection (Mixed Inclusion/Exclusion):**

```javascript
db.emp.findOne(
  { empName: "jones" },
  { sal: 1, empName: 0 } // ❌ ERROR: Mixing 1 and 0
);
```

**Error:**

```
MongoServerError: Cannot do exclusion on field empName in inclusion projection
```

**Why?** Cannot mix inclusion (1) and exclusion (0) in the same projection.

---

#### Example 5: Multiple Matches

**Question**: Find employee with job "clerk"

```javascript
db.emp.findOne({ job: "clerk" });
```

**Behavior**: If there are multiple documents matching the condition, `findOne()` returns **only the first match**.

```
┌────────────────────────────────────────────────────┐
│         findOne() with Multiple Matches            │
├────────────────────────────────────────────────────┤
│                                                    │
│  Collection: emp                                   │
│  ┌─────────────────────────────────────────┐      │
│  │ { empName: "john", job: "manager" }     │      │
│  │ { empName: "jones", job: "clerk" } ← 1st│      │
│  │ { empName: "smith", job: "clerk" }      │      │
│  │ { empName: "bob", job: "clerk" }        │      │
│  └─────────────────────────────────────────┘      │
│                                                    │
│  db.emp.findOne({ job: "clerk" })                 │
│                                                    │
│  Returns: { empName: "jones", job: "clerk" }      │
│           (First matching document only)           │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

### find() - Multiple Documents

**Complete Syntax:**

```javascript
db.collection_name.find({ filter }, { projection }, { options });
```

**Key Difference from findOne():**

- `findOne()`: Returns **one document** (first match)
- `find()`: Returns **all matching documents** (cursor)

#### find() Examples

#### Example 1: Find Multiple Documents

**Question**: Find all employees with job "clerk"

```javascript
db.emp.find({ job: "clerk" }, { empName: 1, _id: 0 });
```

**Output:**

```javascript
[{ empName: "jones" }, { empName: "smith" }, { empName: "bob" }];
```

---

#### Example 2: Find All Documents

**Behavior**: Returns **all documents** in the collection

```javascript
// Both are equivalent
db.emp.find({});
db.emp.find();
```

**Important Notes:**

- No filter = Match all documents
- Returns a cursor (iterable object)
- Can iterate through results

```
┌────────────────────────────────────────────────────┐
│         find() vs findOne() Comparison             │
├────────────────────────────────────────────────────┤
│                                                    │
│  findOne({ job: "clerk" })                         │
│  └─→ Returns: Single document (first match)        │
│                                                    │
│  find({ job: "clerk" })                            │
│  └─→ Returns: Array/Cursor (all matches)           │
│                                                    │
│  Example Collection:                               │
│  ┌────────────────────────────────────────┐       │
│  │ { name: "A", job: "clerk" }  ← Match 1 │       │
│  │ { name: "B", job: "manager" }          │       │
│  │ { name: "C", job: "clerk" }  ← Match 2 │       │
│  │ { name: "D", job: "clerk" }  ← Match 3 │       │
│  └────────────────────────────────────────┘       │
│                                                    │
│  findOne() → Returns Match 1 only                  │
│  find()    → Returns [Match 1, Match 2, Match 3]  │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## Delete Operations

### deleteOne()

**Syntax:**

```javascript
db.collection_name.deleteOne({ filter });
```

**Description**: Deletes the **first document** that matches the filter.

#### deleteOne() Examples

**Example 1: Delete Specific Document**

```javascript
db.demo.deleteOne({ name: "def" });
```

**Output:**

```javascript
{
  acknowledged: true,
  deletedCount: 1
}
```

---

**Example 2: Delete First Document**

```javascript
db.demo.deleteOne({}); // Empty filter
```

**Behavior**: Deletes the first document in the collection

---

**Example 3: Error - No Filter**

```javascript
db.demo.deleteOne(); // ❌ ERROR
```

**Error:**

```
MongoInvalidArgumentError: Method "deleteOne" requires a filter parameter
```

---

### deleteMany()

**Syntax:**

```javascript
db.collection_name.deleteMany({ filter });
```

**Description**: Deletes **all documents** that match the filter.

#### deleteMany() Examples

**Example 1: Delete Multiple Documents**

```javascript
db.demo.deleteMany({ name: "def" });
```

**Behavior**: Deletes all documents where `name` is "def"

**Output:**

```javascript
{
  acknowledged: true,
  deletedCount: 5    // Number of deleted documents
}
```

---

**Example 2: Delete All Documents**

```javascript
db.demo.deleteMany({}); // Empty filter = Delete all
```

**⚠️ Warning**: This deletes **ALL documents** in the collection!

**Output:**

```javascript
{
  acknowledged: true,
  deletedCount: 150   // Total documents deleted
}
```

---

**Example 3: Error - No Filter**

```javascript
db.demo.deleteMany(); // ❌ ERROR
```

**Error:**

```
MongoInvalidArgumentError: Method "deleteMany" requires a filter parameter
```

---

### Delete Operations Comparison

```
┌────────────────────────────────────────────────────────────┐
│         deleteOne() vs deleteMany() Comparison             │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Method          │ Deletes        │ Filter Required       │
│  ───────────────────────────────────────────────────────  │
│  deleteOne()     │ First match    │ Optional ({})         │
│  deleteMany()    │ All matches    │ Optional ({})         │
│                                                            │
│  Example Collection:                                       │
│  ┌───────────────────────────────────────────────┐        │
│  │ { name: "A", status: "inactive" }  ← Match 1  │        │
│  │ { name: "B", status: "active" }               │        │
│  │ { name: "C", status: "inactive" }  ← Match 2  │        │
│  │ { name: "D", status: "inactive" }  ← Match 3  │        │
│  └───────────────────────────────────────────────┘        │
│                                                            │
│  db.coll.deleteOne({ status: "inactive" })                │
│  └─→ Deletes: Match 1 only                                │
│                                                            │
│  db.coll.deleteMany({ status: "inactive" })               │
│  └─→ Deletes: Match 1, Match 2, Match 3                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Update Operations

### updateOne()

**Syntax:**

```javascript
db.collection_name.updateOne({ filter }, { updationValue }, { options });
```

**Parameters:**

1. **filter**: Target document to update
2. **updationValue**: New data to set (uses update operators)
3. **options**: Additional options like `upsert` (TODO: will be covered later)

**Description**: Updates the **first document** that matches the filter.

---

### updateMany()

**Syntax:**

```javascript
db.collection_name.updateMany({ filter }, { updationValue }, { options });
```

**Description**: Updates **all documents** that match the filter.

```
┌────────────────────────────────────────────────────┐
│         Update Operations Overview                 │
├────────────────────────────────────────────────────┤
│                                                    │
│  updateOne({ filter }, { $set: {...} })            │
│  └─→ Updates: First matching document              │
│                                                    │
│  updateMany({ filter }, { $set: {...} })           │
│  └─→ Updates: All matching documents               │
│                                                    │
│  Example:                                          │
│  ┌────────────────────────────────────────┐       │
│  │ { name: "A", age: 25 }  ← Match        │       │
│  │ { name: "B", age: 30 }                 │       │
│  │ { name: "C", age: 25 }  ← Match        │       │
│  └────────────────────────────────────────┘       │
│                                                    │
│  updateOne({ age: 25 }, { $set: { age: 26 } })    │
│  → Updates first match only (A)                    │
│                                                    │
│  updateMany({ age: 25 }, { $set: { age: 26 } })   │
│  → Updates all matches (A and C)                   │
│                                                    │
└────────────────────────────────────────────────────┘
```

> **Note**: Update operators (like `$set`, `$inc`, etc.) will be covered in detail in the next section.

---

## MongoDB Operators

**All MongoDB operators start with `$` (dollar sign)**

```
┌────────────────────────────────────────────────────────────┐
│         MongoDB Operators Hierarchy                        │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  All Operators                                             │
│  │                                                         │
│  ├── Query Operators          (used in filter object)     │
│  ├── Update Operators         (used in update operations) │
│  ├── Aggregation Operators    (used in aggregation)       │
│  ├── Projection Operators     (used in projection)        │
│  └── Geospatial Operators     (used for location data)    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

### Query Operators

**Purpose**: Used in the **filter object** to specify query conditions

**Categories:**

#### 1. Comparison Operators

**Purpose**: Compare field values

| Operator | Description           | Example                          |
| -------- | --------------------- | -------------------------------- |
| `$eq`    | Equal to              | `{ age: { $eq: 25 } }`           |
| `$ne`    | Not equal to          | `{ age: { $ne: 25 } }`           |
| `$gt`    | Greater than          | `{ age: { $gt: 25 } }`           |
| `$gte`   | Greater than or equal | `{ age: { $gte: 25 } }`          |
| `$lt`    | Less than             | `{ age: { $lt: 25 } }`           |
| `$lte`   | Less than or equal    | `{ age: { $lte: 25 } }`          |
| `$in`    | In array              | `{ age: { $in: [20, 25, 30] } }` |
| `$nin`   | Not in array          | `{ age: { $nin: [20, 25] } }`    |

**Example:**

```javascript
// Find employees with salary greater than 5000
db.emp.find({ sal: { $gt: 5000 } });

// Find employees with specific job titles
db.emp.find({ job: { $in: ["manager", "clerk"] } });
```

---

#### 2. Logical Operators

**Purpose**: Combine multiple conditions

| Operator | Description | Syntax                       |
| -------- | ----------- | ---------------------------- |
| `$and`   | Logical AND | `{ $and: [{...}, {...}] }`   |
| `$or`    | Logical OR  | `{ $or: [{...}, {...}] }`    |
| `$not`   | Logical NOT | `{ field: { $not: {...} } }` |
| `$nor`   | Logical NOR | `{ $nor: [{...}, {...}] }`   |

**Example:**

```javascript
// Find employees with salary > 5000 AND job is "manager"
db.emp.find({
  $and: [{ sal: { $gt: 5000 } }, { job: "manager" }],
});

// Find employees with job "manager" OR "clerk"
db.emp.find({
  $or: [{ job: "manager" }, { job: "clerk" }],
});
```

---

#### 3. Array Operators

**Purpose**: Query array fields

| Operator     | Description                    |
| ------------ | ------------------------------ |
| `$size`      | Match array size               |
| `$all`       | Match all elements             |
| `$elemMatch` | Match array element conditions |

**Example:**

```javascript
// Find documents where hobbies array has exactly 3 elements
db.users.find({ hobbies: { $size: 3 } });

// Find documents where skills array contains both "Java" and "Python"
db.users.find({ skills: { $all: ["Java", "Python"] } });
```

---

#### 4. Element Operators

**Purpose**: Query based on field existence and type

| Operator  | Description           |
| --------- | --------------------- |
| `$exists` | Check if field exists |
| `$type`   | Check field type      |

**Example:**

```javascript
// Find documents where email field exists
db.users.find({ email: { $exists: true } });

// Find documents where age is a number
db.users.find({ age: { $type: "number" } });
```

---

#### 5. Evaluation Operators

**Purpose**: Advanced query evaluation

| Operator | Description                 |
| -------- | --------------------------- |
| `$regex` | Regular expression matching |
| `$expr`  | Expression evaluation       |
| `$text`  | Text search                 |
| `$where` | JavaScript expression       |

**Example:**

```javascript
// Find employees whose name starts with "j"
db.emp.find({ empName: { $regex: /^j/i } });

// Compare two fields in same document
db.emp.find({ $expr: { $gt: ["$bonus", "$sal"] } });
```

---

### Update Operators

**Purpose**: Used in **update operations** to modify document data

**Categories:**

#### 1. Field Update Operators

| Operator       | Description         | Example                                    |
| -------------- | ------------------- | ------------------------------------------ |
| `$set`         | Set field value     | `{ $set: { name: "John" } }`               |
| `$unset`       | Remove field        | `{ $unset: { age: "" } }`                  |
| `$rename`      | Rename field        | `{ $rename: { name: "fullName" } }`        |
| `$currentDate` | Set to current date | `{ $currentDate: { lastModified: true } }` |

**Example:**

```javascript
// Update employee salary
db.emp.updateOne({ empName: "jones" }, { $set: { sal: 6000 } });

// Remove email field
db.emp.updateOne({ empName: "jones" }, { $unset: { email: "" } });
```

---

#### 2. Arithmetic Update Operators

| Operator | Description                    | Example                    |
| -------- | ------------------------------ | -------------------------- |
| `$inc`   | Increment by value             | `{ $inc: { age: 1 } }`     |
| `$mul`   | Multiply by value              | `{ $mul: { price: 1.1 } }` |
| `$min`   | Update if less than current    | `{ $min: { score: 50 } }`  |
| `$max`   | Update if greater than current | `{ $max: { score: 100 } }` |

**Example:**

```javascript
// Increment salary by 500
db.emp.updateOne({ empName: "jones" }, { $inc: { sal: 500 } });

// Multiply price by 1.1 (10% increase)
db.products.updateMany({}, { $mul: { price: 1.1 } });
```

---

#### 3. Array Update Operators

| Operator    | Description               | Example                             |
| ----------- | ------------------------- | ----------------------------------- |
| `$push`     | Add element to array      | `{ $push: { hobbies: "reading" } }` |
| `$pull`     | Remove element from array | `{ $pull: { hobbies: "gaming" } }`  |
| `$pop`      | Remove first/last element | `{ $pop: { hobbies: 1 } }`          |
| `$addToSet` | Add unique element        | `{ $addToSet: { tags: "new" } }`    |

**Example:**

```javascript
// Add new skill to skills array
db.users.updateOne({ name: "John" }, { $push: { skills: "MongoDB" } });

// Remove specific hobby
db.users.updateOne({ name: "John" }, { $pull: { hobbies: "gaming" } });
```

---

### Aggregation Operators

**Purpose**: Used in **aggregation pipeline** for data transformation

**Categories:**

#### 1. Pipeline Stage Operators

| Operator   | Description        |
| ---------- | ------------------ |
| `$match`   | Filter documents   |
| `$group`   | Group documents    |
| `$sort`    | Sort documents     |
| `$project` | Reshape documents  |
| `$limit`   | Limit results      |
| `$skip`    | Skip documents     |
| `$lookup`  | Join collections   |
| `$unwind`  | Deconstruct arrays |

**Example:**

```javascript
db.emp.aggregate([
  { $match: { job: "clerk" } }, // Filter
  { $group: { _id: "$deptNo", total: { $sum: "$sal" } } }, // Group
  { $sort: { total: -1 } }, // Sort
]);
```

---

#### 2. Accumulator Operators

| Operator | Description             |
| -------- | ----------------------- |
| `$sum`   | Calculate sum           |
| `$avg`   | Calculate average       |
| `$max`   | Find maximum            |
| `$min`   | Find minimum            |
| `$count` | Count documents         |
| `$push`  | Collect values in array |
| `$first` | Get first value         |
| `$last`  | Get last value          |

---

#### 3. Arithmetic and Date Operators

| Operator      | Description             |
| ------------- | ----------------------- |
| `$add`        | Add numbers/dates       |
| `$subtract`   | Subtract numbers/dates  |
| `$multiply`   | Multiply numbers        |
| `$divide`     | Divide numbers          |
| `$year`       | Extract year from date  |
| `$month`      | Extract month from date |
| `$dayOfMonth` | Extract day from date   |

---

### Projection Operators

**Purpose**: Control which parts of documents/arrays to return

| Operator     | Description                  | Example                                   |
| ------------ | ---------------------------- | ----------------------------------------- |
| `$`          | Array element matching query | `{ "comments.$": 1 }`                     |
| `$slice`     | Limit array elements         | `{ comments: { $slice: 5 } }`             |
| `$elemMatch` | Match array element          | `{ scores: { $elemMatch: { $gt: 80 } } }` |

**Example:**

```javascript
// Return only first 3 comments
db.posts.find({}, { comments: { $slice: 3 } });

// Return specific array element
db.posts.find({ "comments.user": "John" }, { "comments.$": 1 });
```

---

### Geospatial Operators

**Purpose**: Query location-based data using **GeoJSON format**

| Operator         | Description         |
| ---------------- | ------------------- |
| `$near`          | Find near location  |
| `$geoWithin`     | Within boundary     |
| `$geoIntersects` | Intersects geometry |
| `$nearSphere`    | Near on sphere      |

**GeoJSON Format:**

```javascript
{
  location: {
    type: "Point",
    coordinates: [longitude, latitude]
  }
}
```

**Example:**

```javascript
// Find locations near a point
db.places.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.9667, 40.78],
      },
      $maxDistance: 5000, // meters
    },
  },
});
```

---

## Operators Summary

```
┌──────────────────────────────────────────────────────────────────┐
│         MongoDB Operators - Complete Hierarchy                   │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Query Operators (Filter/Find)                                │
│     ├─ Comparison: $eq, $ne, $gt, $lt, $in, $nin                │
│     ├─ Logical: $and, $or, $not, $nor                           │
│     ├─ Array: $size, $all, $elemMatch                           │
│     ├─ Element: $exists, $type                                  │
│     └─ Evaluation: $regex, $expr, $text, $where                 │
│                                                                  │
│  2. Update Operators (Modify)                                    │
│     ├─ Field: $set, $unset, $rename, $currentDate               │
│     ├─ Arithmetic: $inc, $mul, $min, $max                       │
│     └─ Array: $push, $pull, $pop, $addToSet                     │
│                                                                  │
│  3. Aggregation Operators (Transform)                            │
│     ├─ Pipeline: $match, $group, $sort, $project                │
│     ├─ Accumulator: $sum, $avg, $max, $min, $count              │
│     └─ Arithmetic/Date: $add, $subtract, $year, $month          │
│                                                                  │
│  4. Projection Operators (Select)                                │
│     └─ $, $slice, $elemMatch                                    │
│                                                                  │
│  5. Geospatial Operators (Location)                              │
│     └─ $near, $geoWithin, $geoIntersects (GeoJSON)              │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Quick Reference

### Essential Commands Cheat Sheet

```javascript
// DATABASE COMMANDS
show dbs                          // List databases
use db_name                       // Create/switch database
db.dropDatabase()                 // Delete current database

// COLLECTION COMMANDS
show collections                  // List collections
db.createCollection("name")       // Create collection
db.coll.renameCollection("new")   // Rename collection
db.coll.drop()                    // Delete collection

// CRUD OPERATIONS
db.coll.insertOne({...})          // Insert single document
db.coll.insertMany([{...}])       // Insert multiple documents
db.coll.findOne({filter}, {proj}) // Find single document
db.coll.find({filter}, {proj})    // Find multiple documents
db.coll.updateOne({filter}, {$set:{...}})   // Update single
db.coll.updateMany({filter}, {$set:{...}})  // Update multiple
db.coll.deleteOne({filter})       // Delete single document
db.coll.deleteMany({filter})      // Delete multiple documents

// IMPORT DATA
mongoimport "path" -d db_name -c coll_name --jsonArray
```

---

## Summary

### Key Takeaways:

1. **Shell Commands**:

   - `show dbs` - List databases
   - `use db_name` - Create/switch database
   - `show collections` - List collections
   - Shell shortcuts: TAB, ↑↓, cls, Ctrl+L

2. **Collection Operations**:

   - `createCollection()` - Create new collection
   - `renameCollection()` - Rename collection
   - `drop()` - Delete collection
   - `dropDatabase()` - Delete database

3. **mongoimport**:

   - Bulk import JSON data
   - Syntax: `mongoimport "path" -d db -c coll --jsonArray`

4. **Read Operations**:

   - `findOne()` - Find first matching document
   - `find()` - Find all matching documents
   - Projection: `1` = include, `0` = exclude
   - Cannot mix inclusion and exclusion

5. **Delete Operations**:

   - `deleteOne()` - Delete first match
   - `deleteMany()` - Delete all matches
   - Empty filter deletes all documents

6. **Update Operations**:

   - `updateOne()` - Update first match
   - `updateMany()` - Update all matches
   - Uses update operators like `$set`

7. **MongoDB Operators**:
   - All start with `$`
   - Query operators: Filter conditions
   - Update operators: Modify data
   - Aggregation operators: Transform data
   - Projection operators: Select fields
   - Geospatial operators: Location data

---

## Glossary

| Term                | Definition                                                                 |
| ------------------- | -------------------------------------------------------------------------- |
| **ACID**            | Atomicity, Consistency, Isolation, Durability - SQL transaction properties |
| **BASE**            | Basically Available, Soft state, Eventually consistent - NoSQL properties  |
| **BSON**            | Binary JSON - MongoDB's document storage format                            |
| **Collection**      | MongoDB equivalent of a table - stores documents                           |
| **Document**        | MongoDB equivalent of a row - JSON-like record                             |
| **mongosh**         | MongoDB Shell - Command-line interface for MongoDB                         |
| **Compass**         | MongoDB Compass - GUI tool for MongoDB                                     |
| **CRUD**            | Create, Read, Update, Delete - Basic database operations                   |
| **Schema**          | Structure/blueprint defining how data is organized                         |
| **Normalization**   | Organizing data to reduce redundancy                                       |
| **Denormalization** | Intentionally adding redundancy for performance                            |
| **Sharding**        | Distributing data across multiple machines                                 |
| **Replication**     | Copying data to multiple servers for redundancy                            |

---

---

**Last Updated**: 2024
**Version**: 1.4 (Added Intro To Operators)
**Author**: Utkarsh

---

_Remember: The choice between SQL and NoSQL isn't about which is better, but which is more appropriate for your specific use case!_

---
