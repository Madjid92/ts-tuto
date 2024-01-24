 function first() {
   console.log("first(): factory evaluated");
   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
     console.log("first(): called" ,"target:", target, "propertyKey:", propertyKey, "descriptor:", descriptor);
   };
 }
 
 function second() {
   console.log("second(): factory evaluated");
   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
     console.log("seceonde(): called" ,"target:", target, "propertyKey:", propertyKey, "descriptor:", descriptor);
   };
 }
 
 class ExampleClass {
  
   @first()
   @second()
   method(a :string) {
     console.log("===================methode ===============", a)
     return
   }
 }

 //=====================================================================


 function check(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      if(!value) return;
      const of = descriptor.value;
      descriptor.value = function(...args : any) {
        if(args[0]!=='a' && args[0]!=='b') throw Error("argument must be a or b")
        return of.apply(this,args); 
      }
    };
  }
 
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
  
   @check(true)
    greet(t :string) {
      return "Hello, "+ t +"----" + this.greeting;
    }
  }
  const g = new Greeter("title");
  const ge = g.greet("a")
  console.log("==========")


  ///==========================================================================================



 function log(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      if(!value) return
      const context = descriptor.value
      descriptor.value = function (...args:any) {
         console.log('args:',args)
         const result = context.apply(this,args)
         console.log(result)
         return result
        //return context.apply(this,args);
      }
    };
  }
 
  class Operation {
    num:number
    constructor(n : number){
      this.num = n
    }
 
   @log(true)
    multi(t :number) {
      console.log('=============')
      return t * this.num
    }
  }
  const o = new Operation(5);
  const r1 = o.multi(2)
  console.log("==========")