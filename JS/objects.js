let obj = {
  key: "value",
  key2: "value2",
};
//! objects in js are used to store data as key-value pair, each pair is separated by a comma

//? phoneNo --> phone number
let student = {
  name: "vijay",
  age: 23,
  "phone-number": 2345678976, //? if using space or hyphen in keys, then this will throw error, use double quotes to avoid it,
  //   1: "something",
};

//~ keys, fields, properties
// console.log(student);
console.log(student.age);
// console.log(student."phone-number");
// console.log(student["name"]);
console.log(student["phone-number"]);
// console.log(student.name);
// console.log(student[1]);
//! we can access, properties of an object using two ways -> dot notation and 2) square braces

//! datatypes in javascript -->
//? string --> ""
//? number --> 123, 12.4
//? boolean --> t or f
//? arrays --> []
//? objects --> {}
//? undefined
//? null
//! in js objects keys can be either string or number
//! and we cannot pass duplicate keys --> avoid using duplicate keys.
//TODO: after json

let student2 = {
  name: "vijay",
  age: 23,
  isMarried: false,
  skills: ["html", "css"],
  address: {
    city: "Noida",
  },
  key1: undefined,
  key2: null,
  key3: function () {},
  key4: new Date(),
};
//! in js objects we can store all the datatypes as value
console.log(student2);

async function api() {
  let data = await fetch("https://fakestoreapi.com/products");
  let jsonData = await data.json();
  console.log(jsonData);
}

api();

//? github api

async function api() {
  let data = await fetch("https://api.github.com/users");
  let jsonData = await data.json();
  console.log(jsonData);
}

//? https://github.com/Wolfgang281/mongoDB
