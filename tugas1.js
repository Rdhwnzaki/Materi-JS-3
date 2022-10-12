const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error(`Hari ${day} bukan hari kerja`))
            }
        }, 3000)
    })
}

// cekHariKerja('rabu').then((res) => {
//     console.log(res, 'adalah hari kerja')
// }).catch((err) => {
//     console.log(err.message)
// })

/*Sebuah object Promise memiliki metode/ fungsi then dan catch yang masing-masing memiliki fungsi untuk mengolah hasil sukses dan gagal. */

async function tryCatch(day) {
    try {
        const res = await cekHariKerja(day)
        console.log(res, ' adalah hari kerja')
    } catch (err) {
        console.log(err.message)
    }
}
tryCatch('sabtu')

/*Statement tersebut digunakan untuk mengurung eksekusi yang menampilkan error dan
 dapat membuat program tetap berjalan tanpa dihentikan secara langsung. Error yang ditangani oleh try..catch 
 biasa disebut dengan exception */
