//182
const searchNum = ( array) =>{
    let arr7 = [],
        arr5 = [],
        sum = 0;
    if (array){
        array.forEach((item , key) => {
            while (item.toString().length > 2){
                let count = item % 10 * 2;
                if(item > 0) item = Math.floor(item/ 10);
                else  item = Math.ceil(item/ 10);
                item -= count
            }
            if(item % 7)
                arr7.push(array[key]);
        })

        arr7.forEach(item =>{
            if(item %10 === 0 || item %5 === 0)
                arr5.push(item)
        })
        arr5.forEach(item => sum+=item)
        return {
            array: arr5,
            length: arr5.length,
            sum: sum
        };
    }else return undefined;
}

// 243 B
const checkNum = (n) =>{
    let arr = [];
    if (n < 1 ) return 'the number is negative or 0'
    for(let  i = 1; i**2 < n; i++){
        let pow = i**2;
        let count = n - pow;
        if(!(Math.sqrt(count) % 1))
            arr.push([Math.sqrt(count), Math.sqrt(n - count)]);
    }
    if (arr.length){
        let arrayLength = arr.length;
        for(let  i = arrayLength ; i > Math.ceil(arrayLength/2); i--){
            arr.pop();
        }
        return arr;
    }else if (n > 0)
        return 'cannot have the sum of two numbers squared';
    else return undefined;
}

module.exports = {searchNum, checkNum};