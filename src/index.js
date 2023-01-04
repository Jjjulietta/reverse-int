module.exports = function reverse(n) {
  let str = String(Math.abs(n));
  let strTwo = '';
  
    for(let i = str.length - 1; i >= 0; i --){
    strTwo += str[i];
    }
    return +strTwo;
  }




