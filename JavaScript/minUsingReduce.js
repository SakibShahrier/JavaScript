
const arr = [23, 45, 78, 12, 90, 125];
let arr2 = arr.reduce( (a, b) =>{
    return a < b ? a : b;
})

console.log(arr2);