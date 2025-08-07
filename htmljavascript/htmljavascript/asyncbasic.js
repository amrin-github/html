// const promise = () => new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("success")
//     },5000)//5 sec
// })
// promise().then((result)=>{
//     console.log("s:", result)
// }).catch((error) => {
//     console.log("error:", error)
// }).finally(() => {
//     console.log("finally block")
// })

// // const getPromiseResult = async () => {
// //     try {
// //         const res = await promise()
// //         console.log(res)
// //         // const a = await promise()
// //         // console.log(a)
// //     } catch (error) {
// //         console.log("Error:", error)
// //     } finally {
// //         console.log("finally block")
// //     }
// // }
// // getPromiseResult()
// console.log("hello")

// const getDataFromURL = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         const result = await response.json()
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }

// getDataFromURL()
// console.log("defrg")



const set = new Set()
set.add(10)
set.add(20)
set.add(30)
set.delete(20)
console.log( set.has(20))
// set.clear()
console.log(set)
const arr = Array.from(set)
console.log(arr)

const map = new Map()
map.set("name","anni")
map.set("age",30)
map.set("city","kozhikode")
console.log(map.get("name"))
console.log(map)

const cache = new Map()
const a = `Hello world`
console.log(a)
const sum = (a,b) => {
    const key = `${a},${b}`
    if(cache.has(key)){
        console.log("fetching from cache")
        return cache.get(key)
    }
    // console.log("")
    const s = a + b
    cache.set(key,s)
    return s
}
console.log(sum(10,20))
console.log(sum(10,20))

const store = new Map()
const getData = async (user_id) =>{
    try{
        if(store.has(user_id)){
            console.log("fetching from cache...")
            return store.get(user_id)
        }
        // console.log("fetching data")
        const response = await fetch(`https://dummyjson.com/users/${user_id}`)
        const result = await response.json()
        store.set(user_id,result)
        return result
    }catch(error){
        console.log(error)
    }
}

// const handleData = async () => {
//     let res = await getData(13)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     res = await getData(10)
//     console.log(res)
//     console.log("Calling completed")
// }
// handleData()

const studentMark = new Map()
studentMark.set("amrin",21)
studentMark.set("uyoon",20)
studentMark.set("anni",10)
console.log(studentMark)

const fruits = new Set()
fruits.add("apple")
fruits.add("orange")
fruits.add("strawberry")
fruits.add("apple")
console.log(fruits)

const no = [1,2,3,4,5,6,7,8,9,9,2,4,5]
const unqiueNo = new Set(no)
console.log(...unqiueNo)