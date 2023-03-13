function max(array){
    let maxNum = 0;
    if(array.length == 0){
        return undefined
    }else{
        for(let i=0;i<array.length;i++){
            if(array[i]>maxNum){
                maxNum = array[i];
            }else{
                maxNum = maxNum;
            }
        }
        return maxNum
    }
    
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined