{
  // Type Guard

  // typeof --> type guard

  type AlphaNumeric = string | number;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result = add(2, 3);
  console.log(result);

  // In Guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      user.role;
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      user.name;
      console.log(`My name is ${user.name} (member)`);
    }
  };

  getUser({ name: "Firoz", role: "admin" });
  getUser({ name: "Nur" });

  const normalUser: NormalUser = {
    name: "Nur",
  };

  const adminUser: AdminUser = {
    name: "Firoz",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);
}
