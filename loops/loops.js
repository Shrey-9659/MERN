// for loops
// while loops
// do...while loops

// for...in --> object
// let obj = {
//     name : "Shrey Khandelwal",
//     univ : "Vignan",
//     year : 2024,
//     batch : "4H"
// }
// console.log(obj["name"])
// for( key in obj){
//     console.log(obj[key])
// console.log(obj.key)
// }

// for...of --> arrays
// let arr = [1,2,3, "Shrey"]
// for(key of arr){
//     console.log(key)
// }

// for...each
// forEach doesn't return a value.
// We cannot nest multiple forEach

let arr = [1, 2, 3, 4, 5];
// printValue is considered as a callback function
// let printValue = function (i){
//     console.log(i)
// }
// arr.forEach((i)=>{
//     console.log(i+5)
// })
// arr.forEach(printValue)

// map
// let modifiedArray = arr
//   .map((i) => {
//     return i + 5;
//   })
//   .map((j) => {
//     return j*10;
//   });
// console.log(arr)
// console.log(modifiedArray)

// filter
// console.log(arr)
// let modifiedArray = arr.map((i) => {
//     return i + 5;
//   }).filter((j)=>{
//     return j > 10
//   })
// console.log(modifiedArray)

// reduce
// let resultedArray = arr.reduce((acc, curr)=>{
//     return acc * curr
// }, 1)
// console.log(resultedArray)