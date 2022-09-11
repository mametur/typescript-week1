
const sumOfMultiple = (limit) => {
    const numberOne = 3
    const numberTwo = 5;
    let total = 0;

    for (let index = 0; index < limit; index++) {
    const resultOne = (index)%(numberOne);
    const resultTwo = (index)%(numberTwo); 

    if(resultOne === 0 || resultTwo === 0) {
        total += index;
    }
    }

    return total; 
    
} 

module.exports = sumOfMultiple;