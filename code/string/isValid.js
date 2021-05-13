// export default (str) =>{
//     // 字符串转成数组
//     if(str){
//         let arr = str.split('')
//         let newArr = []
//         for(let i in arr){
//             if(newArr.length){
//                 if(newArr[newArr.length-1]==="(" && arr[i]===")"){
//                     newArr.pop()
//                 } else if(newArr[newArr.length-1]==="{" && arr[i]==="}"){
//                     newArr.pop()
//                 }else if(newArr[newArr.length-1]==="[" && arr[i]==="]"){
//                     newArr.pop()
//                 }else {
//                     newArr.push(arr[i])
//                 }
//             } else {
//                 newArr.push(arr[i])
//             }
//         }
//         return !!!newArr.length
//         // 字符入栈，能匹配上出栈，匹配不上出栈，如果最后为空则返回true
//     } else {
//         return false
//     }
// }


