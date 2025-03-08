{
  // Nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName("Nur");
  searchName(null);

  // Unknown Typeof
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`Speed in Meter per Second : ${convertedSpeed}`);
    } else if (typeof value === "string") {
      const [speed, unit] = value.split(" ");
      const numericalValue = parseFloat(speed);
      const convertedSpeed = (numericalValue * 1000) / 3600;
      console.log(`Speed in Meter per Second : ${convertedSpeed}`);
    }
  };

  getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond("1000 km/h");

  //never

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("mushkil se error hogaya");

  //
}
