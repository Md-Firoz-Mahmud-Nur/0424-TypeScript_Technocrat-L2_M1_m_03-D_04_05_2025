{
  // Type Alice
  type Students = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Students = {
    name: "Nur",
    age: 20,
    gender: "male",
    contactNo: "01712345678",
    address: "Dhaka",
  };

  const student2: Students = {
    name: "Firoz",
    age: 20,
    gender: "male",
    address: "Dhaka",
  };

  const student3: Students = {
    name: "Mahmud",
    age: 22,
    gender: "male",
    address: "Dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
