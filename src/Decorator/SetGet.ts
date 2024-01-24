


function logGet(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const get = descriptor.get!;
      descriptor.get = function() {
        console.log("================")
        return get.apply(this)
      }
  
      const set = descriptor.set!;
      descriptor.set = function(...args) {
        console.log("================")
        set.apply(this, args )
        return
      }
    };
  }
  
  
  class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }
   
    @logGet(false)
    get x() {
      return this._x;
    }
   
    @logGet(false)
    get y() {
      console.log("///////")
      return this._y;
    }
  
    set x(x :number) {
      this._x = x
    }
  
    @logGet(true)
    set x1(x :number) {
      this._x = x
    }
   
  
    set y(y: number) {
      console.log('>>><<>>')
      this._y = y
    }
  
  }
  
  const t  = new Point(1,2)
  t.y = 3
  console.log(t.y);
  
  console.log("?????????");
  
  