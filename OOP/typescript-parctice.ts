//  1. array to typescript tuple

const userInfo: [number, string, string, boolean, undefined, string] = [
  101,
  "ema",
  "john",
  true,
  ,
  "2023",
];

// 2. write a function that take two numbers of array as parameter and return a new array that contains only common elements from both array

const commonNumber = ({ arr1, arr2 }: { arr1: number[]; arr2: number[] }) : number[]=> {
     const newArray= arr1.filter((a:number) => arr2.includes(a))
     return newArray
};

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];

const res= commonNumber({arr1,arr2})