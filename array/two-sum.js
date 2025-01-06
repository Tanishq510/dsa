//The objet is to find the subarray which adds up to the required sum
const sum = 10
const number = 5
let anotherNumber  
const array = [1,2,3,4,5]

//Solution one
array.forEach((arr)=>{
   if(arr+number === sum) {
    anotherNumber = number
   }
})

//Solution two
const diff = sum-number
const exists = array.indexOf(diff)

if(exists !==-1){
    anotherNumber = diff
}

console.log(anotherNumber)