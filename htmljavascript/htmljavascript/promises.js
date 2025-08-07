function cumulativeSum(n) {
    /* // Using the formula: sum = n * (n + 1) / 2 */
    if (n < 1) return 0;
    return (n * (n + 1)) / 2;
}

console.log(cumulativeSum(10)); 
console.log(cumulativeSum(100)); 
console.log(cumulativeSum(0)); 
