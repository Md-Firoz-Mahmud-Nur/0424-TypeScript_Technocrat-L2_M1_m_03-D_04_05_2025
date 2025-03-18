{
  // Promise

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data
  };

  getToDo();

  type something = {
    something: string;
  };

  // Simulate
  const createPromise = (): Promise<something> => {
    return new Promise<something>((resolve, reject) => {
      const data: something = { something: "Hello" };
      // const data: string[] = null;

      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // Calling Create Promise Function
  const showData = async (): Promise<something> => {
    const data: something = await createPromise();
    // console.log(data);
    return data;
  };

  showData();
}
