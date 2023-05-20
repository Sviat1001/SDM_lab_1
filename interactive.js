const readLine = require('readline-sync')

const askNumber = (variable) => {
    let value = readLine.question(variable)
    if (isNaN(Number(value)) === true || value === '') {
        console.error (`Error. ${value} is not a number`)
        value = askNumber(variable)
    }
    return value
}
const interactive = () => {
    const questions = ['a: ', 'b: ', 'c: ',]
    const answer = questions.map(coef => askNumber(coef))
    return answer
}
module.exports = interactive