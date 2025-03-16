{
  // Reference Type --> Object

  const user: {
    readonly company: "CodesRaft"; // type --> literal types
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "CodesRaft",
    firstName: "Firoz",
    // middleName: "Mahmud",
    lastName: "Nur",
    isMarried: false,
  };
}
