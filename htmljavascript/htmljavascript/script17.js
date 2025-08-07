function evod(num1) {
    if (num1 % 2 == 0) {
        console.log("even number")
    } else {
        console.log("odd number")
    }
}
evod(46)

function fact(num1) {
    if (num1<0) {
        console.log("this cant be factorized")
    }
    let result = 1;
    for (let i = 1; i <= num1; i++) {
        result *= i
    }
    return result
}
console.log(fact(5))
// 1* 1=1
// 1*2=2
//2*3=6
//6*4=24
//24*5=120

function fib(num1) {
    let fib=[]
    for (let i = 0; i < num1; i++) {
        if (i === 0) {
            fib.push(0)
        }else if (i === 1) {
            fib.push(1)
        }else{
            fib.push(fib[i-1]+fib[i-2])
        }
    }
    return fib
}
console.log(fib(10))
//0,1,(0+1)=1,(1+1)=2,(1+2)=3,...

function add(num1) {
    let sum = 0
    for (let i = 0; i <= num1; i++) {
        sum += i
    }
    return sum
}
console.log(add(5))

function sum(num1) {
    return (num1 * (num1 + 1))/2 
}
console.log(sum(2))
//1+2+3+4+5+6
//(1*(1+1))/2
//(2*(2+1))/2....

function prime(num1) {
    if (num1<=1) {
        return false
    }
    for (let i = 2; i <= num1 / 2; i++) {
        if (num1 % i === 0) {
            return false
        }
    }
    return true
}
console.log(prime(14))
// 2,3,7,11...

function pal(num1) {
    let ori = num1.toString()
    const rev = ori.split("").reverse().join("")
    return ori === rev
}
console.log(pal(1221))

function arm(num1) {
    let ori = num1;
    let numstr = num1 + "";
    let digits = numstr.length; 
    let sum = 0;

    for (let i = 0; i < digits; i++) {
        let d = parseInt(numstr[i]);  
        let power = 1;

        for (let j = 0; j < digits; j++) {
            power *= d;
        }

        sum += power;
    }

    return sum === ori;
}

console.log(arm(153)); // true

const yearcheak = {
    isleap: function(year) {
        return (year % 4 === 0 && year % 100 !== 0 )|| (year % 400 === 0) 
    }
}
console.log(yearcheak.isleap(2023)) // true

function rstring(str) {
    return str.split("").reverse().join("")
}
console.log(rstring("hello"))

function pal(string) {
    let ori = string.toString()
    const rev = ori.split("").reverse().join("")
    return ori === rev
}
console.log(pal("malayalam"))

function countv(string) {
    let count = 0
    let vowels = ("aeiouAEIOU")
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++
        }
    }
    return count
}
console.log(countv("helloworld"))

