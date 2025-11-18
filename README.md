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

```
❌ Error: connect ECONNREFUSED 127.0.0.1:27017

✅ Solution:
1. Check if MongoDB Server is running
   CMD (Admin) → net start mongodb

2. Check if port 27017 is available
   CMD → netstat -ano | findstr :27017

3. Check firewall settings
```

### Issue 2: mongosh Command Not Found

```
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

```
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
**Version**: 1.1 (Added MongoDB Deep Dive)
**Author**: Utkarsh

---

_Remember: The choice between SQL and NoSQL isn't about which is better, but which is more appropriate for your specific use case!_

---
