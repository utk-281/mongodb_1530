//! ========================== aggregation =========================================
//! whatever operations are performed using aggregate it does not modify the original data

/* 
Aggregation in MongoDB is like a data processing pipeline.

Imagine you have many documents (records), and you want to:
  filter them
  group them
  count them
  sort them
  and calculate totals or averages
  or join two collections

Instead of writing many queries, you use one single pipeline where data flows step by step.
*/

/* In MongoDB, aggregation essentially refers to a powerful framework that allows us to process, transform, and analyze data in a pipeline-based manner, very similar to how SQL performs GROUP BY, HAVING, JOIN, and complex reporting operations. The core idea behind aggregation is that instead of simply fetching documents, we can push documents through a series of well-defined stages — such as filtering, grouping, projecting, sorting, joining, and computing — to generate meaningful insights or reshaped data.

It is a data processing pipeline. Each stage in the pipeline takes the incoming documents, applies a specific transformation, and passes the results to the next stage. For example, $match is like a filter, $group performs grouping and aggregations like count, sum, avg, min, max, $project reshapes the fields, $sort reorders documents, and $lookup performs joins across collections. */

// db.collection_name.aggregate([{$match}, {s2}, {s3}, {s4}, ...])
//? input to stage1 --> collection
//? input to stage2 --> op of stage1
//? input to stage3 --> op of stage2

//& each stage:{} can only consist one aggregation operator , $match, $project, $addFields, etc...
//& different aggregation operators

//? $match --> it is used to filter out the documents based on some conditions
db.collection_name.aggregate([
  {
    $match: { conditions },
  },
]);

//? $project --> it is used to hide/display (to display use key:1, to hide use key:0) the fields of the documents and also used for aliasing. if key is present then it will be displayed otherwise if not present then it will not be displayed
db.collection_name.aggregate([
  {
    $project: {
      key: 1,
      key2: 0,
      aliasName: "$originalFieldName",
      //   key: <conditions>,
    },
  },
]);

//? $group --> it is used to group the documents based on some field and perform aggregate functions like sum, avg, min, max, count. (these 5 operators can be used only inside $group)
db.collection_name.aggregate([
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 },
      max: { $max: "$fieldName" },
      min: { $min: "$fieldName" },
      avg: { $avg: "$fieldName" },
      sum: { $sum: "$fieldName" },
    },
  },
]);

//? $sort --> it is used to sort the documents in ascending or descending order based on some field,
//~(default is ascending order)
db.collection_name.aggregate([
  {
    $sort: { fieldName: 1 / -1, fieldName2: 1 / -1 }, // 1 for ascending order, -1 for descending order
  },
]);

//? $skip --> it is used to skip the first n documents
db.collection_name.aggregate([
  {
    $skip: n,
  },
]);

//? $limit --> it is used to restrict the number of documents to n
db.collection_name.aggregate([
  {
    $limit: n,
  },
]);

//? $unwind: it is used to fatten the array field
db.collection_name.aggregate([
  {
    $unwind: "$arrayFieldName",
  },
]);

//? $lookup: it is used to perform join operation between two or more collections
db.collection_name.aggregate([
  {
    $lookup: {
      from: "otherCollectionName", // collection to join
      localField: "fieldName", // field from the input documents
      foreignField: "fieldName", // field from the documents of the "from" collection
      as: "outputArrayFieldName", // output array field
    },
  },
]);
