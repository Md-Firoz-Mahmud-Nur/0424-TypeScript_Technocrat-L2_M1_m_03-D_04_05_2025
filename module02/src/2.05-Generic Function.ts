{
  //  Generic function
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };

  const resGenericObject = createArrayWithGeneric<User>({
    id: 222,
    name: "Firoz",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res2 = createArrayWithTuple<string, number>("Bangladesh", 20);
  const res3 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudents = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudents({
    name: "Firoz",
    email: "a@b.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudents({
    name: "Nur",
    email: "a@b.com",
    watch: "Apple Watch",
  });
}
