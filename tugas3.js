// //Promise 1 
// let cekGenapGanjil = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num % 2 == 0) {
//                 resolve(num)
//             } else {
//                 reject(num)
//             }
//         }, 2000)
//     })
// }
// cekGenapGanjil(7).then((res) => {
//     console.log(res, ' adalah bilangan genap')
// }).catch((err) => {
//     console.log(err, ' adalah bilangan ganjil')
// })

//promise 2
let usia = (angka) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (angka < 25) {
                resolve('Anda masih muda')
            } else {
                reject('Anda sudah tidak muda')
            }
        }, 4000)
    })
}
usia(40).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})