/*Arrays of objects*/
const people = [
  {
    firstName: `Sky`,
    age: 24,
  },
  {
    firstName: `Biohazard`,
    age: 17,
  },
  {
    firstName: `Dream`,
    age: 13,
  },
  {
    firstName: `Axeman`,
    age: 16,
  },
  {
    firstName: `Spooky`,
    age: 12,
  },
];

/*empty array for adults */
let adults = [];
/*for each loop */
function leaveDate() {
  people.forEach(function (data, index) {
    console.log(
      index + ` I am ` + data.firstName + ` and my age is ` + data.age + `.`
    );
    if (data.age > 18) {
      adults.push(data);
    }
  });

  let fname = adults.map((adults) => adults.firstName);

  const lastName = fname[fname.length - 1];

  const startingNames = fname.slice(0, -1);

  const startingNameList = startingNames.join(", ");

  const finalNameList = startingNameList + " and " + lastName;

  console.log(finalNameList + " are adults !");
}
leaveDate();
