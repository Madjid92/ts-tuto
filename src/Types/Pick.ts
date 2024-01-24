type Amies = "Bantar" | "DODA" | "DORAN"
enum ACTIVITY {
  DRINK = "1" ,
  PUCY = "2",
  DOD ="3"
}
type tesType = {
  [t in Amies] : ACTIVITY
}
type DoranType = Pick<tesType, "DORAN">

const v5 : DoranType = {
  DORAN : ACTIVITY.DRINK
}

console.log(v5)