function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    const c  = constructor.prototype;
    const keyOfC = Object.getOwnPropertyNames(c)
    keyOfC.forEach(( att: string) => {
      const currentMethod = c[att]
      if(typeof currentMethod !== 'function') return
      const newMehtod = function (...args :any) {
        console.log("args :", args)
        const result = currentMethod.apply(constructor, args)
        console.log("result :", result)
        return result
      }
      constructor.prototype[att] = newMehtod
     
    })
    return constructor
  }
 
  function reportableClassDecorator0<T extends { new (...args: any[]): {} }>(constructor: T) {
    const c  = constructor.prototype;
    const keyOfC = Object.getOwnPropertyNames(c)
    keyOfC.forEach(( att: string) => {
      const currentMethod = c[att]
      if(typeof currentMethod !== 'function') return
      const newMehtod = function (...args :any) {
        const result = currentMethod.apply(constructor, args.map((e:any)=> e+1 ))
        return result
      }
      constructor.prototype[att] = newMehtod  
    })
    return constructor
  }
  
  @reportableClassDecorator
  @reportableClassDecorator0
  class BugReport3 {
 
 
    test(t:string){
      return t
    }
 
    test1(t:number){
      return t
    }
  }
  
  const bug3 = new BugReport3();
  bug3.test("dsqdsq")
  bug3.test1(1)
  bug3.test1(1)
  