let arr = [1, 2, 3, 4, 5]; //! array of numbers
//? indexing of array always starts with 0
//? maximum will be length - 1
// console.log(arr[2]);
// console.log(arr[1]);
// console.log(arr[7]);
// console.log(arr[-1]);
//! undefined --> it is a datatype

//! it is a data structure in which we can store data in continuous format

let cart = [
  {
    name: "phone",
    price: 300,
    qty: 1,
  },
  {
    name: "laptop",
    price: 1300,
    qty: 1,
    key: {
      id: "123",
    },
  },
  {
    name: "headphone",
    price: 400,
    qty: 2,
  },
];

console.log(cart[1].qty);
console.log(cart[1]["price"]);
