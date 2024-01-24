type Amies1 = "Bantar" | "DODA" | "DORAN"
type tesType1 = {
 [t in Amies1] :string
}
const t88 : Partial<tesType1> = {
    Bantar : "4",
}

console.log(t88)

type over = Partial<Record<Amies, string>>

const v18 : over = {}
console.log(v18)