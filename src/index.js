/*
* @ params number [1;10^7], base number [2; 256] 
* @ return how many zeros in the end of number, 
* which is factorial of number in base base system
*/
/*module.exports = function getZerosCount(number = 1, base = 2) {
    let j = 0;
    let i = 2;
    let arr = [];
    let bas = base;
    let num = number;
    while (i < bas){
        if (bas % i === 0){
            arr[j] = i;
            j++;
            bas = bas/i;
        }
        else i++;
    }

    arr[j] = i;

    let len = arr.length;
    let last = arr[len-1];

    let rep = 0;
    for(j = 0; j < len; j++){
        if (arr[j] === last) rep++;
    }

    let count = 0;
    while(num){
        num = (num/last)|0;
        count+=num;
    }
    return Math.floor(count/rep);
}*/
module.exports = function getZerosCount(number = 1, base = 2) {
    let k = 0;
    let j = 0;
    let i = 2;
    let count = 0;
    let numbersB = [];
    let exp = [];
    let bas = base;
    
    while(i <= bas){
      if (bas % i === 0) {
            numbersB[j] = i; 
            j++;
      }
      while (bas % i === 0) {
         bas = bas/i;              
         count++;
      }
    i++; 
      if (count > 0) {
          exp[k] = count;
          k++;
      }
    count = 0; 
    }

    const len = numbersB.length;
    count = 0;
    j = 0;
    let zer = [];
    let num = number;
    for (i = 0; i < len; i++){
        k = numbersB[i];
        while (num > 1){
             num = Math.floor(num/k);
             count = count + num;
        }
        zer[j] = Math.floor(count/exp[j]);
        count = 0;
        j++;
        num = number;
    }
    zer.sort((left, right) => left - right);
    return zer[0];
}