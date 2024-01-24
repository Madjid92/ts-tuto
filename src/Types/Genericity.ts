


// import "./utils/test"
class MyArray<T>{
    constructor(private t : Array<T>){}
    map<K>(f :(e : T) => K) :Array<K>{
   
      return this.t.reduce(
        (acc: Array<K> ,e : T ) =>{
          return [...acc , f(e)]
        }
        ,[])
    
    }
  
    filter(f :(e : T) => boolean) :Array<T>{
      return this.t.reduce(
        (acc: Array<T> ,e : T ) =>{
          const cond = f(e);
          return (cond) ? [... acc , e] : acc 
        }
        ,[])
    }
  }
  
  const tab = new MyArray([1,5])
  console.log(tab.map((e)=> e*2))
  console.log(tab.filter((e)=> e > 2))