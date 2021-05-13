/**
 * @param {string} digits 23
 * @return {string[]}
 */
export default (digits) => {
    // 建立一个键盘映射
    let digitsArr = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    if(digits.length>1) {
        // 把输入字符串按单字符分隔变成数组，23=>[2,3]
        let numArr = digits.split('')
        // 把数字数组换成相应的字符 [2,3]=>['abc','def']
        let code = []
        numArr.forEach(item => {
            code.push(digitsArr[item])
        })
        let comb = (arr) => {
            // 申请一个临时空间存储新的结果数组
            let newArr = []
            let iL = arr[0].length
            let jL = arr[1].length
            for (let i = 0; i < iL; i++) {
                for (let j = 0; j < jL; j++) {
                    newArr.push(`${arr[0][i]}${arr[1][j]}`)
                }
            }
            arr.splice(0, 2, newArr)
            // 递归
            if (arr.length > 1) {
                comb(arr)
            } else {
                return newArr
            }
            return arr[0]
        }
        return comb(code)
    } else{
        if(digits){
            return digitsArr[digits].split('')
        } else {
            return []
        }
    }
}
