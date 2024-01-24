
class MyClass {
    [s :string ]: boolean;
}

const c = new MyClass();
c['1'] = true

console.log(c)