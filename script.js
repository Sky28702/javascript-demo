/* array */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);
console.log(array[4]);

/* Objects */
let Pc = {
  Ram: "8GB",
  CPU: "12 Cores",
  Graphics_Card: "3050 RTX",
  OS: "Windows",
};
console.log(Pc.CPU, Pc.Graphics_Card);

/* Array of objects*/

const Arrays = [
  {
    id: 1,
    firstName: "Prateek",
    lastName: "Rai",
    email: "prateekrai462@outlook.com",
    age: 19,
  },

  {
    id: 2,
    firstName: "San",
    lastName: "Jaya",
    email: "xyz@outlook.com",
    age: 57,
  },
];

console.log(Arrays);
console.log(Arrays[0]);

/* For each loop*/
Arrays.forEach(function (data, index) {
  console.log(
    index +
      ". My name is  " +
      data.firstName +
      data.lastName +
      " and i am " +
      data.age +
      " years old."
  );
});
