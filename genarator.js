// 生成器函数
function* g() {
   yield 'a';
   yield 'b';
   yield 'c'
}
let gen = g()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
// 依次输出
// { value: 'a', done: false }
// { value: 'b', done: false }
// { value: 'c', done: false }
// { value: undefined, done: true }
