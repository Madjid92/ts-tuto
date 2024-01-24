type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T244 = Extract<Shape, { kind: "circle" }>

const t244 : T244 = {
    kind : "circle",
    radius : 1
}

console.log(t244)