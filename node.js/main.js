// 부정 (Negation)

console.log(!true); // false
console.log(!false); // true

console.log(!0); // true
console.log(!!0); // false
console.log(!null); // true

// 비교 (Comparison)

const a = 1;
const b = 3;

// 동등(형 변환)
console.log(a == b); // false
// 부등(형 변환)
console.log(a != b); // true

// 일치
console.log(a === b); // false

// 불일치
console.log(a !== b); // true

// Greater than
console.log(a > b); // false

//
console.log(a >= b); // false

console.log(a <= b); // true
