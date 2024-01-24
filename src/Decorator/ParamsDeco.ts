import "reflect-metadata";
const requiredMetadataKey = Symbol("required");
const addMetadataKey = Symbol("add");
 
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
 
function add(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingAddParameters: number[] = Reflect.getOwnMetadata(addMetadataKey, target, propertyKey) || [];
  existingAddParameters.push(parameterIndex);
  Reflect.defineMetadata( addMetadataKey, existingAddParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
  let method = descriptor.value!;
 
  descriptor.value = function () {
    let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error("Missing required argument.");
        }
      }
    }

    let aaParameters: number[] = Reflect.getOwnMetadata(addMetadataKey, target, propertyName);
    if (aaParameters) {
      for (let parameterIndex of aaParameters) {
        arguments[parameterIndex] = arguments[parameterIndex] +1
      }
    }
    return method.apply(this, arguments);
  };
}

class BugReport14 {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
 
  @validate
  print(@required verbose: boolean, @add c: number, @required d:string|undefined) {
    console.log("//////",c)
    if (verbose) {
      return `type: ${this.type}\ntitle: ${this.title}`;
    } else {
     return this.title; 
    }
  }
}

const br14 = new BugReport14('test')
br14.print(true, 0, "")
console.log("===================")