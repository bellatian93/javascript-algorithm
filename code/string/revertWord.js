/**
 * 反转字符串中的单词
 * @param str
 * @returns {string}
 */
export default (str) => {
  // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
  // 2. 对数组进行遍历，然后每个元素进行反转
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

// 拓展：split()入参可以是常量，也可以是一个正则
// 知识点：熟悉字符串中的相应api

/**
 * 计数二进制子串
 * @param str
 * @returns {string}
 */

// export default (str) => {
//   // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   // 2. 对数组进行遍历，然后每个元素进行反转
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   // 2. 对数组进行遍历，然后每个元素进行反转
//   return str.match(/[\w']+/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }


