//@Note interface is a 100% abstract class
abstract class Base {
    abstract getName(): string;
  
    printName() {
      console.log("Hello, " + this.getName());
    }
  }

class test extends Base {
    getName(): string {
        return "---"
    }
}

const t1 = new test()
console.log(t1.getName())