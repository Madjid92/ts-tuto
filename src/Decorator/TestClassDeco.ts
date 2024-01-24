new ExampleClass().method("toto")
 function sealed(constructor: Function) {
   Object.seal(constructor);
   Object.seal(constructor.prototype);
   return
 }

 @sealed
 class BugReport {
   type = "report";
   title: string;
 
   constructor(t: string) {
     this.title = t;
   }
 }

 new BugReport("i")


 
 function reportableClassDecorator3<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log("===========")
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
  
  @reportableClassDecorator3
  class BugReport1 {
    type = "report";
    title: string;
  
    constructor(t: string) {
      this.title = t;
    }
  }
  
  const bug = new BugReport1("Needs dark mode");
  console.log(bug.title); // Prints "Needs dark mode"
  console.log(bug.type); // Prints "report"

