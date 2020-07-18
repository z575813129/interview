// const promise = new Promise(function(resove, reject) {
//     // do some...
//     if ('异步成功') {
//         resove(value)
//     } else {
//         reject(error)
//     }
// })

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }
//
// timeout(1000).then((value) => {
//     console.log(value);
// });
function g(val) {
    return new Promise((resolve, reject) => {
        resolve(val)
    })
}

g('hello').then(r => {
    console.log('resolve', r)
}).catch(e => {
    console.log('reject', e)
}).finally(() => {
    console.log('finally')
})

Promise.resolve('qqq').then(r => {
    console.log(r)
})
