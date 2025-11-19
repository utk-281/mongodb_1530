```markdown
# MongoDB - Complete Guide

## Table of Contents

- [Introduction](#introduction)
- [Data vs Information](#data-vs-information)
- [What is a Database?](#what-is-a-database)
- [Types of Databases](#types-of-databases)
  - [SQL Databases](#sql-databases)
  - [NoSQL Databases](#nosql-databases)
- [SQL vs NoSQL](#sql-vs-nosql)
- [Scaling Strategies](#scaling-strategies)
- [MongoDB - Deep Dive](#mongodb---deep-dive)
  - [What is MongoDB?](#what-is-mongodb)
  - [MongoDB Installation](#mongodb-installation)
  - [MongoDB Components](#mongodb-components)
  - [MongoDB Server Management](#mongodb-server-management)
  - [MongoDB Shell Commands](#mongodb-shell-commands)
  - [MongoDB CRUD Operations](#mongodb-crud-operations)
  - [BSON and ObjectId](#bson-and-objectid)
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
│ DATA TO INFORMATION │
├─────────────────────────────────────────┤
│ │
│ Raw Data: │
│ ┌────┬────┬────┬────────┬─────────┐ │
│ │ 12 │ 34 │ 45 │ varun │ english │ │
│ └────┴────┴────┴────────┴─────────┘ │
│ ↓ PROCESSING ↓ │
│ │
│ Information: │
│ "Varun scored 12 marks in English" │
│ │
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
│ DBMS Architecture │
├──────────────────────────────────────────┤
│ │
│ User/Application │
│ ↕ │
│ ┌──────────────┐ │
│ │ DBMS │ ← Manages operations │
│ └──────────────┘ │
│ ↕ │
│ ┌──────────────┐ │
│ │ Database │ ← Stores data │
│ └──────────────┘ │
│ │
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

┌─────────────────────────────────────────────────┐
│ Students Table │
├─────────┬──────────┬─────┬─────────────────────┤
│ ID │ Name │ Age │ Subject │
├─────────┼──────────┼─────┼─────────────────────┤
│ 1 │ Varun │ 20 │ English │
│ 2 │ Ashwin │ 21 │ Mathematics │
│ 3 │ Chetna │ 22 │ Science │
└─────────┴──────────┴─────┴─────────────────────┘

Schema must be defined BEFORE data insertion:

- ID: Integer, Primary Key
- Name: String(50), Not Null
- Age: Integer
- Subject: String(50)

````

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

// User B - Notice different structure (flexible schema)
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
````

**Visual Representation:**

```
┌────────────────────────────────────────┐
│      Document-Based Database           │
├────────────────────────────────────────┤
│  Collection: Users                     │
│  ┌──────────────────────────────────┐ │
│  │  Document 1:                     │ │
│  │  { name: "Varun", age: 20 }      │ │
│  └──────────────────────────────────┘ │
│  ┌──────────────────────────────────┐ │
│  │  Document 2:                     │ │
│  │  { name: "Ashwin", age: 21,      │ │
│  │    email: "a@mail.com" }         │ │
│  └──────────────────────────────────┘ │
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
│      (Ashwin)──WORKS_AT──→(TechCorp)          │
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
│  Row Key  │  Column Family 1  │  Column Family 2│
│  ─────────┼───────────────────┼─────────────────│
│  user_1   │  name: "Varun"    │  grade: "A"     │
│           │  age: 20          │  gpa: 3.8       │
│  ─────────┼───────────────────┼─────────────────│
│  user_2   │  name: "Ashwin"   │  grade: "B+"    │
│           │  age: 21          │  gpa: 3.5       │
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
│      All or nothing - transaction          │
│      either completes fully or not at all  │
│                                             │
│  C - Consistency                            │
│      Data remains valid and follows        │
│      all defined rules and constraints     │
│                                             │
│  I - Isolation                              │
│      Concurrent transactions don't         │
│      interfere with each other             │
│                                             │
│  D - Durability                             │
│      Once committed, data persists         │
│      even after system failure             │
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
│   ┌──────────────┐                        │
│   │   Server     │                        │
│   │  RAM: 16GB   │                        │
│   │  HDD: 1TB    │                        │
│   └──────────────┘                        │
│          ↓                                 │
│      UPGRADE                               │
│          ↓                                 │
│   After:                                   │
│   ┌──────────────┐                        │
│   │   Server     │                        │
│   │  RAM: 32GB   │ ← More powerful        │
│   │  HDD: 2TB    │ ← Same machine         │
│   └──────────────┘                        │
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
│   ┌──────────────┐                             │
│   │   Server 1   │                             │
│   │  RAM: 16GB   │                             │
│   └──────────────┘                             │
│                                                 │
│          ↓                                      │
│      ADD MORE SERVERS                           │
│          ↓                                      │
│   After:                                        │
│   ┌──────────────┐  ┌──────────────┐          │
│   │   Server 1   │  │   Server 2   │          │
│   │  RAM: 16GB   │  │  RAM: 16GB   │ ← New    │
│   └──────────────┘  └──────────────┘          │
│          │                  │                   │
│          └──────┬───────────┘                  │
│              ┌──┴───┐                          │
│              │ Load │                          │
│              │Balancer│                        │
│              └──────┘                          │
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
│              ┌──────────────┐                 │
│              │  Databases   │                 │
│              │  Collections │                 │
│              │  Documents   │                 │
│              └──────────────┘                 │
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
│  ┌───────────────────────────────────────────┐   │
│  │  Visual Interface                         │   │
│  │  • Browse databases & collections         │   │
│  │  • Insert/Update/Delete documents         │   │
│  │  • Run queries visually                   │   │
│  │  • View query performance                 │   │
│  │  • Schema analysis                        │   │
│  │  • Import/Export data                     │   │
│  └───────────────────────────────────────────┘   │
│                                                     │
│  Limitation: Only accepts JSON, not JS objects     │
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

## Next Topics to Cover

### Upcoming MongoDB Topics:

- [ ] MongoDB CRUD operations - Update (updateOne, updateMany, replaceOne)
- [ ] MongoDB CRUD operations - Delete (deleteOne, deleteMany)
- [ ] MongoDB query operators and filters (advanced)
- [ ] MongoDB aggregation pipeline
- [ ] MongoDB indexing strategies
- [ ] MongoDB data modeling patterns
- [ ] MongoDB relationships (embedded vs referenced)
- [ ] MongoDB schema validation
- [ ] MongoDB transactions
- [ ] MongoDB Atlas (Cloud MongoDB)
- [ ] MongoDB with Node.js/Python
- [ ] MongoDB performance optimization
- [ ] MongoDB backup and restore
- [ ] MongoDB security and authentication

---

## Additional Resources

### Official Documentation:

- **MongoDB Manual**: https://docs.mongodb.com/manual/
- **MongoDB Shell (mongosh)**: https://docs.mongodb.com/mongodb-shell/
- **MongoDB University**: https://university.mongodb.com/ (Free courses)
- **MongoDB Community Forums**: https://www.mongodb.com/community/forums/

### Practice Platforms:

- **MongoDB Atlas**: Free cloud MongoDB instance
- **MongoDB Playground**: Online MongoDB shell
- **Tutorials**: MongoDB University free courses

### Tools:

- **MongoDB Compass**: GUI for MongoDB
- **Mongo Shell (mongosh)**: CLI for MongoDB
- **MongoDB VSCode Extension**: IDE integration
- **Studio 3T**: Advanced MongoDB GUI

---

## Glossary

| Term               | Definition                                                  |
| ------------------ | ----------------------------------------------------------- |
| **BSON**           | Binary JSON - MongoDB's document storage format             |
| **Collection**     | MongoDB equivalent of a table - stores documents            |
| **Document**       | MongoDB equivalent of a row - JSON-like record              |
| **ObjectId**       | 12-byte unique identifier for MongoDB documents             |
| **mongosh**        | MongoDB Shell - Command-line interface                      |
| **Compass**        | MongoDB Compass - Graphical user interface                  |
| **CRUD**           | Create, Read, Update, Delete operations                     |
| **Projection**     | Specifying which fields to include/exclude in query results |
| **Query Operator** | Special syntax for filtering documents ($gt, $lt, etc.)     |
| **Parameter**      | Placeholder variable in function definition                 |
| **Argument**       | Actual value passed to function when calling                |
| **PUI**            | Process Unique Identifier in ObjectId                       |
| **Cursor**         | Pointer to query result set                                 |

---

## Contributing

This document is a living resource. Keep updating as you learn more:

1. Add new sections for advanced topics
2. Include practical examples from your projects
3. Document troubleshooting solutions you discover
4. Add diagrams for complex concepts
5. Cross-reference related sections

---

**Last Updated**: 2024
**Version**: 2.0 (Added MongoDB Shell Commands and Enhanced CRUD Operations)
**Author**: Utkarsh

---

_"The best way to learn MongoDB is to practice. Start with simple queries and gradually move to complex operations. Happy coding!"_

```

This complete markdown file includes:

1. ✅ All original content (Data vs Information, Database types, SQL vs NoSQL, Scaling)
2. ✅ MongoDB installation and components
3. ✅ MongoDB server management
4. ✅ **NEW: Comprehensive MongoDB Shell Commands section** with:
   - Understanding db object
   - Listing databases
   - Creating/switching databases
   - Creating collections
   - Listing collections
   - Practical exercises
   - Shell shortcuts
   - Renaming collections
   - Database renaming limitations
   - Deleting collections
   - Deleting databases
   - Syncing with Compass
   - Quick reference table
   - Common scenarios
5. ✅ CRUD operations (insertOne, insertMany, findOne)
6. ✅ BSON and ObjectId detailed explanations
7. ✅ Query operators reference
8. ✅ Best practices and troubleshooting
9. ✅ Extensive diagrams and visual aids
10. ✅ Practical examples throughout

You can save this as `DBMS_Complete_Guide.md` and open it in any Markdown viewer or editor!
```
