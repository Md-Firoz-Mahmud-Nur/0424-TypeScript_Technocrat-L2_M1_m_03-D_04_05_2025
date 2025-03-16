{
  // Constraints

  const addCourseToStudents = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudents({
    id: 1234,
    name: "Firoz",
    email: "a@b.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudents({
    id: 20,
    name: "Nur",
    email: "a@b.com",
    watch: "Apple Watch",
  });

  const student3 = addCourseToStudents({
    id: 20,
    name: "Nur",
    email: "a@b.com",
    car: "Toyota",
  });
}
