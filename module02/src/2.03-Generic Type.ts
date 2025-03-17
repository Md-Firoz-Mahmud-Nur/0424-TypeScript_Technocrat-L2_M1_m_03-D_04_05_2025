{
  //Generic Type

  type GenericArray<t> = Array<t>;

  // const rollNumbers: number[] = [3, 4, 5];
  const rollNumbers: GenericArray<number> = [3, 4, 5];

  // const mentors: string[] = ["Firoz", "Mahmud", "Nur"];
  const mentors: GenericArray<string> = ["Firoz", "Mahmud", "Nur"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Nur",
      age: 20,
    },
    {
      name: "Firoz",
      age: 20,
    },
  ];

  const add = (x: number, y: number) => x + y;

  add(2, 3);

  type GenericTuple<x, y> = [x, y];

  const manush: GenericTuple<string, string> = ["Firoz", "Nur"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Nur", email: "a@b.com" },
  ];
}
