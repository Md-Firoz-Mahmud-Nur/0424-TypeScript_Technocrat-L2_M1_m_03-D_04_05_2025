{
  // type assertion
  let anything: any;

  anything = "Next Level Web Development";

  anything = 222;

  // (anything as number).

  const kiloGramToGram = (
    value: string | number
  ): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kiloGramToGram(1000) as number;
  const result2 = kiloGramToGram("1000");
  console.log(result1, result2);

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
