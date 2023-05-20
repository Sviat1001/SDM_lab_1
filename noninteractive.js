const { readFileSync, existsSync } = require('fs')

const noninteractive = () => {
    const path = process.argv[2]
    if (!existsSync(path)) {
        console.log(`file doesn't exist`)
        process.exit(1)
    }
    const coeffs = readFileSync(path,'utf8').split(' ' , 3)

    coeffs.forEach((coef) => {
        if (isNaN(Number(coef)) === true || coef === ''){
            console.error('invalid file format')
            process.exit(1)
        }
    })
    return coeffs
}

module.exports = noninteractive