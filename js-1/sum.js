function sum(n){
    if(n == 1){
        return 1
    }
    else{
        return n + sum(n-1) 
    }
}
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120