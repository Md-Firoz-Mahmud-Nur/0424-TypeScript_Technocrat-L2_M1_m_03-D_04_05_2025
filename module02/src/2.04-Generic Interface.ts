{
  // Generic interface
  interface Developer<T, X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type AppleWatch3 = { brand: string; model: string; display: string };

  const developer1: Developer<AppleWatch3> = {
    name: "Nur",
    computer: {
      brand: "Lenovo",
      model: "Legion",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch 3",
      display: "O-LED",
    },
  };

  interface AppleWatch4 {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Bike {
    model: string;
    engineCapacity: string;
  }

  const developer2: Developer<AppleWatch4, Bike> = {
    name: "Firoz",
    computer: {
      brand: "HP",
      model: "Omen",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch 4",
      display: "O-LED",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };
}
