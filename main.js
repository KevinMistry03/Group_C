console.log("hello");
console.log("Hi");

let firstName;
let lastName;

function getUserFullName(firstName = "Murtuza", lastName = "Rangwala") {
  console.log(`${firstName} ${lastName}`);
}

const newFunction = () => {
    console.log('this function made nby kevin');
}

newFunction();
getUserFullName();
getUserFullName("Murtuza", "Master");
