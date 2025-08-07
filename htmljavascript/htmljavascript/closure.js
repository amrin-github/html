function createCounter() {
    let count = 0
    return function () {
        count++
        return count
    } 
}
const counter = createCounter()
console.log(counter())
console.log(counter())

function createGreeting() {
    return function(name){
        return "Hello " + name
    }
}
const greeting = createGreeting()
console.log(greeting("John"))
console.log(greeting("Jane"))

function createMul() {
    let mul = 0
    return function (no) {
        return 5 * no
    }
}
const multipilcation = createMul()
console.log(multipilcation(3))
console.log(multipilcation(6))

function createTotal() {
    let total = 0
    return{
        add:function (amount) {
            total += amount
            return total 
        },
        getTotal:function name(params) {
            return total    
        }  
    }
}
const totall = createTotal()
console.log(totall.add(5))
console.log(totall.add(3))
console.log(totall.getTotal())

function createFormatting() {
    let format ="normal"
    return {
        setFormat: function(type){
            format = type.toLowerCase()
        },
        formatt: function (name) {
            if (format=="uppercase") {
                return name.toUpperCase()
            }else if (format=="lowercase") {
                return name.toLowerCase()
            }else if (format=="capitalize") {
                return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
            }else{
                return name
            }
        }
    }
}
const formatter = createFormatting()
formatter.setFormat("uppercase")
console.log(formatter.formatt("john"))
formatter.setFormat("lowercase")
console.log(formatter.formatt("John"))
formatter.setFormat("capitalize")
console.log(formatter.formatt("jOHN"))

function createCalculator(num) {
    return{
        add: function (adding) {
            num += adding
            return num
        },
        sub: function (subtr) {
            num -= subtr
            return num
        }
    }
}
const calc = createCalculator(10)
console.log(calc.add(5))
console.log(calc.sub(3))
console.log(calc.add(5))
console.log(calc.sub(5))

function createList() {
    let itemm = []
    return{
        add:function (item) {
            itemm.push(item)
            return item
        },
        getList:function () {
            return itemm.slice()
        }
    }
}
const item = createList()
console.log(item.add("amrin"))
console.log(item.add("johar"))
console.log(item.getList())

function createConverter() {
    return {
        celsiusToFahrenheit: function(celsius) {
            return (celsius * 9/5) + 32;
        },
        fahrenheitToCelsius: function(fahrenheit) {
            return (fahrenheit - 32) * 5/9;
        }
    };
}
const converter = createConverter();
console.log(converter.celsiusToFahrenheit(0));    
console.log(converter.fahrenheitToCelsius(32));   

function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function(amount) {
            balance += amount;
            return "Deposited " + amount + ". New balance: " + balance;
        },
        withdraw: function(amount) {
            if (amount > balance) {
                return "Insufficient funds. Current balance: " + balance;
            }
            balance -= amount;
            return "Withdrawn " + amount + ". New balance: " + balance;
        },
        getBalance: function() {
            return balance;
        }
    };
}
const account = createBankAccount(1000);
console.log(account.deposit(500));     
console.log(account.withdraw(200));    
console.log(account.getBalance());   

//recursive

function fact(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return n * fact(n-1)
}
console.log(fact(5))

function sum(n) {
    if (n === 1) {
        return 1
    }
    return n + sum (n-1)
}
console.log(sum(5))

function printDesc(n) {
    if (n<1) {
        return 
    }
    console.log(n)
    printDesc(n-1)
}
console.log(printDesc(5))

// dont know anything

function fibonacci(n) {
    if (n === 1) {
        return 1
    }
    if (n === 0) {
        return 0
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(6))

function sumDigits(n) {
    if(n<10){
        return n
    }
    let lastDigit = n % 10
    let remaining = (n-lastDigit) / 10
    return lastDigit + sumDigits(remaining)
}
console.log(sumDigits(123))

function isPalindrome(string) {
    if (string.length<=1) {
        return true
    }
    if (string[0] !== string[string.length-1]) {
        return false
    }
    return isPalindrome(string.slice(1,string.length-1))
}
console.log(isPalindrome("radar"))
console.log(isPalindrome("hello")) 

function power(base, exponent) {
    if (exponent === 0) {
        return 1
    }
    return base * power(base, exponent - 1)
}
console.log(power(2, 3))

function countDigits(n) {
    if (n < 10) {
        return 1
    }
    return 1 + countDigits((n - n % 10) / 10)
}
console.log(countDigits(12345))

function isNumberPalindrome(n) {
    // Convert number to string
    let str = String(n);

    // Helper recursive function
    function check(str) {
        if (str.length <= 1) {
            return true
        }
        if (str[0] !== str[str.length - 1]) {
            return false
        }
        return check(str.slice(1, str.length - 1))
    }
    return check(str);
}
console.log(isNumberPalindrome(12321))
console.log(isNumberPalindrome(12345))

function reverse(str) {
    if (str.length <= 1) {
        return str
    }
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}
console.log(reverse("hello"))

