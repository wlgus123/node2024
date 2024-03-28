const A = 0 ?? 42
console.log(A)  // 0

const B = 0 || 42
console.log(B)  // 42

const C = "" ?? "hi!"
console.log(C)  // ""

const D = "" || "hi!"
console.log(D)  // "hi!"
