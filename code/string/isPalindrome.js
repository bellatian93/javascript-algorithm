/**
 * 整数回文
 * @param number
 * @returns {boolean}
 */
export default (number) =>{
    if(number<0||(number!==0&& number%10===0)){
        return false
    }
    if(number.toString().length>1){
        let str = number.toString()
        let newStr = str.split('').reverse().join('')
        return str === newStr
    } else{
        return true
    }
}
