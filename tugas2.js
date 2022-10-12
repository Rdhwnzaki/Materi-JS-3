const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry data not found'), [])
        }
    }, 1000)
}
const mapping = async (err, arr) => {
    try {
        if (err !== null) throw 'Sorry data not found'
        const data = await arr.map((item) => {
            return item
        }).join("\n")
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
getMonth(mapping)

