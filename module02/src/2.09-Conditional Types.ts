{
  // Conditional Types

  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false;
  type y = a1 extends b1 ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    jet: string;
  };
  type CheckVehicle<T>= T extends keyof Sheikh ? true : false


  type hasBike= CheckVehicle<"jet">;

}
