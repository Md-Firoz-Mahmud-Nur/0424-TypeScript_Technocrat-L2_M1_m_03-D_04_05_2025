{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type userWithRole1 = User1 & {
    role: string;
  };

  interface userWithRole2 extends User2 {
    role: string;
  }

  const user1: userWithRole2 = {
    name: "Nur",
    age: 20,
    role: "admin",
  };

  type rollNumber = number;

  // js --> object --> object, array, function

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];

  type Add = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
