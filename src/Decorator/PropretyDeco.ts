



function format() {
    return function(target: any, propertyKey: string){
      let decoGreeting: any;
      const setter = function(prop :any){
        console.log("prop :", prop )
        decoGreeting = prop
      }
  
      const getter = function(){
        console.log("=====" )
        return decoGreeting
      }
  
      Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
      })
     
    }
  }
  
  class G {
    @format()
    greeting: string;
  
  
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return this.greeting
    }
  }
  
  const grt = new G("test")
  console.log(grt.greet())
  grt.greeting = "eee"
  console.log(grt)