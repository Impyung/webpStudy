// const a = 0.1;
// const b = 0.2;

// console.log(Number((a + b).toFixed(1)));

// const user = {
//   name: 'HEROPY',
//   age: 85,
//   email: null,
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.email);

// //Array

// const fruits = ['Apple', 'Banana', 'Cherry'];

// console.log(fruits);

// // [] : array literal
// // const fruits = new Array('Apple', 'Banana', 'Cherry')
// // console.log(fruits[0]) : 인덱싱
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.length);

// // Object(객체)

// const user = new Object();
// user.name = 'Heropy';
// user.age = 85;

// console.log(user);

// // {name: 'Heropy', age: 85} : key-value 형태로 출력

// function User() {
//   this.name = 'HEROPY';
//   this.age = 85;
// }
// const user = new User();

// console.log(user);

// const user = {
//   name: 'HEROPY',
//   age: 85,
//   // age : 22, 가 있으면 나중에 작성된 22가 우선
// };
// const key = 'age';

// console.log(user.name);
// console.log(user['age']);
// console.log(user[key]);

// const userA = {
//   name: 'HEROPY',
//   age: 85,
// };

// const userB = {
//   name: 'NEO',
//   age: 22,
//   parent: userA,
// };

// console.log(userB);
// console.log(userB.parent.name);
// console.log(userB['parent'].name);
// console.log(userB['parent']['name']);

// const users = [userA, userB];

// console.log(users[0].name);
// console.log(users[0]['name']);

// // 형 변환 (Type Conversion)

// const a = 1; // Number
// const b = '1'; // String

// console.log(a === b); // false
// console.log(a == b); // true

// /// === : 일치 연산자, == : 동등연산자
// /// === 를 사용하는 것을 권장(같은 타입인지 체크)

// const c = 0;
// const d = false;

// console.log(c == d); // true 형 변환이 일어나기 떄문
// 참 거짓(Truthy & Falsy)

// if (true) {
//   console.log('참!');
// } // 참

// // 거짓에 해당하는 값
// // 1) false
// // 2) 0
// // 3) null
// // 4) undefined
// // 5) NaN
// // 6) ''
// // 7) 0N : BigInt

// const fruits = ['Apple', 'Banana'];

// if (fruits.length) {
//   console.log('아이템이 들어있습니다.');
// }
// // length를 통해 fruits의 요소가 비어있으면 0이 출력 즉 false

// // 데이터 타입 확인

// const a = 123;

// console.log(typeof a);
// console.log(typeof 'HELLO' === 'string');
// console.log(typeof false === 'boolean');
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});

// console.log([].constructor === Array);
// console.log({}.constructor === Object);

// console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null');

// function checkType(data) {
//   return Object.prototype.toString.call(data).slice(8, -1);
// }
// console.log(checkType(null));
// console.log(checkType([]));
// console.log(checkType({}));
// console.log(checkType(123));
// console.log(checkType(0));
// console.log(checkType(false));
// console.log(checkType(function () {}));

// // 산술(Arithmetic)

// console.log(1 + 2);
// console.log(5 - 7);
// console.log(3 * 4);
// console.log(10 / 2);
// console.log(7 % 5);

// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(3)); //true
// console.log(isEven(12)); // false

// // 할당(Assignment)
// let a = 3;

// // a = a + 2; : a += 2;와 동일 +*/-% 다 가능

// a += 2;

// console.log(a);

// // 증감(Increment & Decrement)

// let b = 3;

// console.log(b++); //3
// console.log(b); //4
// console.log(++b); //5
// console.log(--b); //4
// console.log(b--); //4
// console.log(b); // 3

// // 부정 (Negation)

// console.log(!true); // false
// console.log(!false); // true

// console.log(!0); // true
// console.log(!!0); // false
// console.log(!null); // true

// // 비교 (Comparison)

// const a = 1;
// const b = 3;

// // 동등(형 변환)
// console.log(a == b); // false
// // 부등(형 변환)
// console.log(a != b); // true

// // 일치
// console.log(a === b); // false

// // 불일치
// console.log(a !== b); // true

// // Greater than
// console.log(a > b); // false

// //
// console.log(a >= b); // false

// console.log(a <= b); // true
