{
  // Mapped Types

  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
  const arrayOfStrings: string[] = ["a", "b", "c", "d", "e"];
  const arrayOfStrings2: string[] = arrayOfNumbers.map((num) => num.toString());
  console.log(arrayOfStrings2);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"];

  type AreaString = {
    height: string;
    width: string;
  };

  type AreaString2 = {
    [key in "height" | "width"]: string;
  };

  type AreaString3 = {
    [key in keyof AreaNumber]: string;
  };

  type AreaString4<T> = {
    [key in keyof T]: T[key];
  };

  const area: AreaString4<{height: string; width: number}> = {
    height: "10",
    width: 20,
  };
}
