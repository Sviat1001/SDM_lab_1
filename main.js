const interactive = require('./interactive');
const noninteractive = require ('./noninteractive')
/*const arrayCheck = (array) => { 
    array.forEach((coef) => array.push(Number(coef)));
  
    if (Number(array[0]) === 0) {
      console.error('Error. \'a\' can\'t be 0');
      process.exit(1);
    }
  
    return array;
  };
  */
array = [1, 4, 2]
const solution = (array) => {
//    const Coeffs = arrayCheck(array);
    const Coeffs = array
    const [a, b, c] = Coeffs
    const Discriminant = b * b - 4 * a * c
    const DiscRoot = Math.sqrt(Discriminant)

    console.log(`Equation is ${a}(x^2) + ${b}x + ${c} = 0`)

    if (Discriminant < 0){ 
        message = 'There are no roots'
        return message}

    if (DiscRoot == 0){
        console.log ('There is 1 root')
        Root = -b / 2*a
        const message = `x = ${Root.toFixed(1)}`
        return message
    }

    if (DiscRoot > 0){
        console.log ('There are 2 roots')
        Root1 = (-b + DiscRoot) / (2 * a) 
        Root2 = (-b - DiscRoot) / (2 * a)
        message = (`x1 = ${Root1.toFixed(1)}, x2 = ${Root2.toFixed(1)}`)
        return message
    }
}

/*let result;
if (process.argv[2] !== undefined) {
  result = noninteractive();
} else {
  result = interactive();
}
console.log(solution(result));*/
console.log(solution(array))