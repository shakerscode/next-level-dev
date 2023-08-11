//type mapping

type IDATA ={
    a1: string;
    a2: number;
    a3:string;
}
type  IRData = {
    [key in keyof IDATA]: number // by giving number type, we determined the type of IDATA  obj.
}
type  IRData2 = {
    [key in keyof IDATA]: IDATA[key] // by giving key,we are making it dynamic.
}
type  IRData3<T> = {
    [key in keyof T]: T[key] // by giving key,we are making it A GENERIC TYPE .
}
const IDATA = {
    a1: "number",
    a2: 33,
    a3: "number"
}

const res4 :IRData3<IDATA>=IDATA
res4.a2 = 23

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];
  
    return item[key];
  
  }
  
  
  
  const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
  
  const r4 = (getArrayItem(users, 0, 'name'))