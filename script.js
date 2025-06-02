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

/* For each loop*/

function getData() {
  Arrays.forEach(function (data, index) {
    console.log(
      index +
        1 +
        ". My name is  " +
        data.firstName +
        data.lastName +
        " and i am " +
        data.age +
        " years old."
    );
  });
}
getData();
