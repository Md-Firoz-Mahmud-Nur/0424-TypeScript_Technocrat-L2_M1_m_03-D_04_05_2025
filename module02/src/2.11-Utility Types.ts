{
  // Utility Types

  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Require
  type PersonRequired = Required<Person>;

  // Partial
  type PersonOptional = Partial<Person>;

  // ReadOnly
  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Nur",
    age: 20,
    email: "a@b.com",
    contactNo: "01712345678",
  };

  // person1.name = "Firoz";

  // Record
  type MyObject = {
    a: string;
    b: string;
  };

  type MyObject2 = Record<string, string>;

  const EmptyObject: Record<string, unknown> = {};

  const object: MyObject2 = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };
}
