/* Array of objects */
let adults = [];

const Arrays = [
  {
    id: 1,
    firstName: "Prateek",
    lastName: "Rai",
    email: "prateekrai462@outlook.com",
    age: 18,
  },
  {
    id: 2,
    firstName: "San",
    lastName: "Jaya",
    email: "xyz@outlook.com",
    age: 18,
  },
  {
    id: 3,
    firstName: "sima",
    lastName: "Jaya",
    email: "xyz@outlook.com",
    age: 12,
  },
  {
    id: 4,
    firstName: "son",
    lastName: "Jaya",
    email: "xyz@outlook.com",
    age: 12,
  },
  {
    id: 5,
    firstName: "Siya",
    lastName: "ioya",
    email: "xyz@outlook.com",
    age: 14,
  },
];

/* For each loop */
function getData() {
  Arrays.forEach(function (data, index) {
    console.log(
      index +
        1 +
        ". My name is " +
        data.firstName +
        " " +
        data.lastName +
        " and I am " +
        data.age +
        " years old."
    );

    if (data.age >= 18) {
      adults.push(data);
    }
  });
  console.log(" ");
  if (adults.length === 0) {
    console.log("Conclusion: No one is adult !");
  } else if (adults.length === 1) {
    console.log("Conclusion: Only " + adults[0].firstName + " is adult !");
  } else {
    console.log(
      "Conclusion: " +
        adults[0].firstName +
        " and " +
        adults[1].firstName +
        " are adult !"
    );
  }
}
getData();
