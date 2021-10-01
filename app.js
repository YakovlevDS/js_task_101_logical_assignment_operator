const z = { duration: 50, title: "" };

z.duration ||= 10;
console.log(z.duration);
// expected output: 50

z.title ||= "title is empty.";
console.log(z.title);



let a = 1;
const b = 2;
a &&= b;
console.log(a); // returns 2
// the above statement is equivalent to
a && (a = b);
// OR another approach
if (a) {
  a = b;
}


let v = 33;
let v1 = null;
const h = 3;
v ||= h;
v1 ||= h;
console.log(v1);
console.log(v); // returns 3
// the above statement is equivalent to
h || (v = h);

let r = null;
const t = 13;
r ??= t;
console.log(r); // returns 13
// the above statement is equivalent to
if (r === null || r === undefined) {
  r = t;
}