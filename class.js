//定义类
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

var point = new Point(2, 3);
// console.log(point.toString())
// console.log(point.hasOwnProperty('x'))
// console.log(point.hasOwnProperty('y'))
// console.log(point.hasOwnProperty('toString'))
// console.log(point.__proto__.hasOwnProperty('toString'))


var p1 = new Point(2, 3);
var p2 = new Point(3, 2);
// console.log(p1.__proto__ === p2.__proto__)
// console.log(Object.getPrototypeOf (p2))

class Parent {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    static hello() {
        console.log('hello');
    }

    Parentfuc() {
        console.log('this:', this)
        console.log('我是父类方法')
    }
}
// let aa = new Parent(1,2)
// aa.Parentfuc()
// class Children extends Parent {
//     constructor(x, y, color) {
//         super(x, y);
//         this.color = color; // 正确
//     }
//
//     childFuc() {
//         console.log(this.color)
//     }
// }
//
// let cp = new Children(1, 2, 'red')
// cp.childFuc() // 输出 red
// cp.Parentfuc() // 输出 我是父类方法
// Children.hello() // 输出 hello
// // cp.hello() // 输出 报错
// console.log(cp instanceof Children)  // true
// console.log(cp instanceof Parent) // // true
// console.log(Object.getPrototypeOf(Children) === Parent) // true  Object.getPrototypeOf可以从子类上获取父类
class A {
    constructor() {
        this.x = 1;
    }
    print() {
        console.log(this.x);
    }
}

class B extends A {
    constructor() {
        super();
        this.x = 2;
    }
    m() {
        super.print();
    }
}

let b = new B();
b.m() // 2