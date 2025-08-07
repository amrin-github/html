let arr = ("Hello World")
console.log(arr.length)
console.log(arr.charAt(6))
console.log(arr.includes("W"))
console.log(arr.replace("w","r"))


const a =[1,2,3,4,5,6,7,8,9,0]
// console.log(a.reverse())
console.log(a.join("-"))
// console.log(a)
// a.push(10)

// console.log(a)
// a.unshift(-4,-2)
// console.log(a)
// console.log(a.push())
// console.log(a.unshift())
a.splice(0,5,10,20)
console.log(a)

const obj={
    name:"amrin",
    age:21,
    tag:["t","d"],
    location:{
        state:"kerala",
        city:"kozhikode"
    }
}
obj.sample="hello"
const fi = "sample"
console.log(obj.tag)
console.log(obj)
console.log(obj.location.state)
console.log(obj[fi])