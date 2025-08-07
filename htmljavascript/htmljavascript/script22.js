const array = [1,2,3,4,5]
const mapDouble = array.map((num)=> num * 2 )
console.log(mapDouble)

const cel = [0,10,20,30,40]
const mapFah = cel.map((fah)=> (fah * 9/5) + 32)
console.log(mapFah)

const names = ['john', 'jane', 'bob']
const mapCap = names.map((na)=> na.charAt(0).toUpperCase()+na.slice(1))
console.log(mapCap)

const ar = [{
    id:1,
    value:10
},{
    id:2,
    value:20
}]
const mapOb = ar.map((va)=>va.value)
console.log(mapOb)

// const price =  [29.99, 10.50, 5.99, 100.00]
// const mapPrice = price.map((pri)=>  price.toFixed(2).replace(/^/, '$'))
// console.log(mapPrice)

const even = [1,2,3,4,5,6,7,8,9,10]
const filterEven = even.filter((eve)=>eve % 2 ==0)
console.log(filterEven)

const word =  ['apple', 'banana', 'cherry', 'date']
const filterWord = word.filter((words)=>words.length>5)
console.log(filterWord)

const Array = [0, 1, '', null, undefined, 'hello', false]
const filterArray = Array.filter(Boolean)
console.log(filterArray)

const num1 =  [10,20,30,40,50]
const fliterNum1 = num1.filter((no)=>no>30)
console.log(fliterNum1)

const price1 = [{item: 'book', price: 50}, {item: 'laptop', price: 1000}]
const filterPrice = price1.filter((pric)=>pric.price>50)
console.log(filterPrice)

const summ = [1,2,3,4,5] 
const reduceSum = summ.reduce((prev,sum1)=>prev + sum1 ,0)
console.log(reduceSum)

const prod = [1,2,3,4] 
const reduceProd = prod.reduce((prev,mul)=>prev * mul ,1)
console.log(reduceProd)

const word1 = ['hello', 'world', '!']
const reduceWord = word1.reduce((prev,words)=>prev + words )
console.log(reduceWord)

const occu = ['a','b','a','c','b'] 
const reduceOccu = occu.reduce((prev,occus)=>{
  prev[occus] = (prev[occus] || 0) + 1;
  return prev;
}, {});
console.log(reduceOccu)

const avg = [10,20,30,40,50] 
const reduceAvg = avg.reduce((prev,avg1)=>prev + avg1,0) /avg.length
console.log(reduceAvg)

const all = [1,2,3,4,5] 
const mfrAll = all
.map(squ=>squ * squ)
.filter(eve=>eve % 2 == 0)
.reduce((prev,summ)=>prev + summ ,0)
console.log(mfrAll)

const all1 = ['apple', 'banana', 'cherry']
const mfcAll = all1 
.map(upper=>upper.toUpperCase())
.filter(lenn=>lenn.length>5)
.join(",")
console.log(mfcAll)

const temp = [0,10,20,30] 
const ffaAll = temp
.map(fah=> (fah * 9/5) + 32)
.filter(abo=>abo>50)
.reduce((prev,avg1,_,array)=>prev + avg1 / array.length,0)
console.log(ffaAll)

const obj1 = [{name: 'John', age: 30}, {name: 'Jane', age: 25}]
const mrAll = obj1
.map(peo=>peo.age)
.reduce((prev,avg1,_,array)=>prev + avg1 / array.length,0)
console.log(mrAll)

const word2 =  ['hello', 'world', 'javascript']
const totalLength = word2
.map(word => word.length)           
.filter(length => length > 5)       
.reduce((sum, len) => sum + len, 0)
console.log(totalLength)

const employees = [
    { name: "Alice", age: 30, salary: 70000, department: "Engineering" },
    { name: "Bob", age: 45, salary: 80000, department: "Marketing" },
    { name: "Charlie", age: 35, salary: 65000, department: "Engineering" },
    { name: "David", age: 50, salary: 90000, department: "Management" },
    { name: "Eve", age: 28, salary: 50000, department: "Marketing" },
    { name: "Frank", age: 40, salary: 75000, department: "Finance" },
    { name: "Grace", age: 32, salary: 62000, department: "Engineering" },
    { name: "Hannah", age: 27, salary: 55000, department: "Marketing" },
    { name: "Isaac", age: 38, salary: 68000, department: "HR" },
    { name: "Jack", age: 42, salary: 72000, department: "Finance" },
    { name: "Kara", age: 29, salary: 54000, department: "Engineering" },
    { name: "Leo", age: 33, salary: 58000, department: "HR" },
    { name: "Mona", age: 47, salary: 82000, department: "Marketing" },
    { name: "Nina", age: 31, salary: 69000, department: "Finance" },
    { name: "Oliver", age: 36, salary: 73000, department: "Management" }
];

const mapUpper = employees.map(upper => upper.name.toUpperCase())
console.log(mapUpper)

const filterList = employees.filter(more => more.salary>60000)
console.log(filterList)

const reduceTotal = employees.reduce((total,emp) => total + emp.salary,0)
console.log(reduceTotal)

const reduceAvg1 = employees
.filter(mark=>mark.department == "Marketing")
.map(emp => emp.salary)
.reduce((sum, salary, _, arr) => sum + salary / arr.length, 0);
console.log(reduceAvg1)

const mapName = employees.map(names=>names.name)
console.log(mapName)
