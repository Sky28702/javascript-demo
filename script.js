/*Arrays of objects*/
const people = [
  {
    firstName: `Sky`,
    age: 24,
  },
  {
    firstName: `Biohazard`,
    age: 27,
  },
  {
    firstName: `Dream`,
    age: 13,
  },
  {
    firstName: `Axeman`,
    age: 39,
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
  if (adults.length > 0) {
    let fname = adults.map((adults) => adults.firstName);
    console.log(` `);
    console.log(
      fname.slice(0, -1).join(` , `) +
        ` and ` +
        adults[adults.length - 1].firstName
    );
  } else {
    console.log(`no adults found`);
  }
}
leaveDate();
