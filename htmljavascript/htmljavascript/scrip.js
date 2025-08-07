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


//callback 

function sum() {
    return 10
}
const sum1 = () => 10
console.log(sum1) 

const users = [{
    name: "amrin",
    age: 30
},{
    name: "uyoon",
    age: 20
},{
    name: "anni",
    age: 19
}]
const filterUser = users.filter((user)=> user.age < 20)
console.log(filterUser)

const mapUser = users.map((user)=>{
    if (user.age == 20) {
        user.age = 21
    }
    return user
})
console.log(mapUser)

const reduceUser = users.reduce((prev,user)=> prev + user.age , 0)
console.log(reduceUser)

const array = [1,2,3,4,5,6,7,8,9,10]
array.forEach((element,index,arr)=> console.log(element,index,arr))

// closure
const cities = ["New York", "London", "Tokyo", "Paris", "Sydney"]
const [firstCity, secondCity, thirdCity] = cities;
console.log(firstCity, secondCity, thirdCity)

const parentFunc = () => {
    let data = 0; 
    const childFunc = () => {
        data++;
        return data
    }
    return childFunc
}
const res = parentFunc()
console.log(res())
console.log(res())
console.log(res())

let i = 0;
const getCount = () => {
    if (i == 10) {
        return 100;
    }
    console.log(i)
    i++
    return getCount()
}
console.log(getCount())

class Calc{
    add(a, b) {
        return a + b
    }
}
class Add extends Calc{
    // overloading
    // add(a, b, c) {
    //     return a + b + c
    // }

    parentAdd(a, b) {
        return super.add(a, b)
    }
    // overriding
    add(a, b) {
        return a - b
    }
}
const ress = new Add()

console.log(ress.add(10, 20))
console.log(ress.parentAdd(10, 20))    