{
  //
  // Union Types
  type FrontEndDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontEndDeveloper" | "expertDeveloper";
  type Developer = FrontEndDeveloper | FullStackDeveloper;

  const newDeveloper: FrontEndDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  };
  const user1: User = {
    name: "Nur",
    gender: "male",
    bloodGroup: "O+",
  };

  type BackendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper2 = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper2 = BackendDeveloper & BackendDeveloper2;

  const fullStackDeveloper: FullStackDeveloper2 = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
