/*
* @ params number [1;10^7], base number [2; 256] 
* @ return how many zeros in the end of number, 
* which is factorial of number in base base system
*/
module.exports = function getZerosCount(number = 1, base = 2) {
    let j = 0;
    let i = 2;
    let arr = [];
    let bas = base;
    let num = number;
    while (i < bas){
        if (bas % i == 0){
            arr[j] = i;
            j++;
            bas = bas / i;
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
}