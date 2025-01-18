console.log("hello");
console.log("Hi");

let firstName;
let lastName;

function getUserFullName(firstName = "Murtuza", lastName = "Rangwala") {
  console.log(`${firstName} ${lastName}`);
}

getUserFullName();
getUserFullName("Murtuza", "Master");
