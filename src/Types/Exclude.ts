
type T10 = {name:'douda',age:30} | {name:'doran', age:31}

type T20 = Exclude<T10, {name : "douda"}>

const t21: T20 = {
  name : "doran", age : 31
}

console.log(t21)