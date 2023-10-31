///////////////////////
////   Some Week   ////
///////////////////////

// const names = ['alice', 'john', 'bob', 'ann']
// const isStartWithALetter = names.every(
//         (name) => name.toLowerCase().startsWith('a')
// )

// console.log(isStartWithALetter)

// const nums = [5, 2, 3, 4, 7]
// console.log(nums.reduce((sum, num) => sum*num), 0)

// const names = ['Alice', 'Bob', 'Ann', 'Cath']
// console.log(names.reduce((str, name) => str+name.charAt(0), ''))

// const buyProducts = [{price: 50, quantity: 2}, {price: 299, quantity: 10}, {price: 15, quantity: 5}]
// buyProducts[0].price
// console.log(buyProducts.reduce((p, q) => p + (q.price * q.quantity), 0))

// const nums = [10, 3, 75, 1, 30, 100]
// // splice to delete
// // Start index, number of element that will deleted
// nums.splice(2, 3)
// console.log(nums)

// //splice to insert
// nums.splice(2, 0, 111, 555, 888)
// console.log(nums)

// //splice to replace
// nums.splice(0, 1, 100, 200, 400)
// console.log(nums)

// const nums = [-5, -6, 7, 8, 9, -1, 0]
// for(i = 0; i < nums.length; i++) {
//         if (nums[i] < 0) {
//                 nums[i] = 0
//         }
// }
// console.log(nums)

// const replaceNum = nums.map(
//         (num) => {
//                 return num < 0 ? 0 : num
//         }
// )
// console.log(replaceNum)

// const msg = "Today is present"
// console.log(msg.includes('Re'))
// console.log(msg.includes('re'))
// console.log(msg.includes('day'))
// console.log(msg.includes('Present'))

// num = [1, 2, 3, 4, 5]
// const numString = num.join('*')
// console.log(numString)
// console.log(num.sort().reverse())