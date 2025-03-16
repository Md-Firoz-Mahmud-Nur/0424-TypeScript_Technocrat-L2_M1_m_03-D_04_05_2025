// Destructuring
const user = {
  id: 345,
  name: {
    firstName: "Firoz",
    middleName: "Mahmud",
    lastName: "Nur",
  },
  contactNo: "01712345678",
  address: "Bangladesh",
};

const {
  contactNo,
  name: { middleName },
} = user;

// Array Destructuring
const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

const [, , bestFriend, ...rest] = myFriends;
