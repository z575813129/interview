// async
function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

async function asyncPrint(val, ms) {
    await timeout(ms)
    console.log(val)
}

asyncPrint('hello', 500)    // 输出 hello

async function g() {
    return await '123'
}

g().then(r => console.log(r))   // 输出 123

// 同时触发写法
let [foo, bar] = await Promise.all([f1(), f2()]);