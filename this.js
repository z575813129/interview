// let obj = {
//     message: 'My name is: '
// }

// function getName(firstName, lastName) {
//     console.log(this.message + firstName + ' ' + lastName)
// }

// getName.call(obj, 'zhang', 'xiao')
// getName.apply(obj, [' ', 'zhang'])

// var myObj = {
//     name: "极客时间",
//     showThis() {
//         console.log(this)
//     }
// }
// 通过一个对象调用，this会指向上下文对象本身
// myObj.showThis()  // {name: "极客时间", showThis: ƒ}
// // 在全局环境中调用一个函数，函数内部的this指向全局
// var foo = myObj.showThis
// foo() // win对象

// function CreateObj(){
//     this.name = "极客时间"
//     console.log(this)   // CreateObj {name: "极客时间"}
// }
// new CreateObj()

let C = (...a) => {
    console.log(a);
}
C(1,2,3)