function getProp<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const prop = getProp({ name: "shaker", age: 100 }, "age");

//Asynchronous ts

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Hi shaker";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to load");
    }
  });
};

const res = makePromise();

interface ITodo {
  userId: string;
  id: number;
  title: string;
  complete: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return data.json();
};

const getData = async (): Promise<void> => {
  const res = getTodo();
  console.log(res);
};


//conditional type
