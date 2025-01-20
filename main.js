console.log("hello");
console.log("Hi");

let firstName;
let lastName;
let middlename;

function getUserFullName(firstName = "Murtuza", lastName = "Rangwala") {
  console.log(`${firstName} ${lastName}`);
}

function getMiddleName(middlename){
  console.log(`${middlename}`);	 
}

const newFunction = () => {
    console.log('this function made nby kevin');
}

newFunction();
getUserFullName();
getMiddleName();
getUserFullName("Murtuza", "Master");
getUserFullName("Aayush", "Vadiya");
getMiddleName("Huh")
