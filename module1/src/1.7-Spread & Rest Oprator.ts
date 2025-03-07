{
  // Spread Operator
  const bros1: string[] = ["Rahim", "Karim"];
  const bros2: string[] = ["Firoz", "Mahmud"];
  bros1.push(...bros2);

  const mentors1 = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };
  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // Rest Operator
  const greenFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greenFriends("Firoz", "Mahmud", "Nur");
}
