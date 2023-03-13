function join(array){
    let str = ""
    for(let i=0;i<array.length;i++){
        str = str + array[i] + " "
    }
    return str
}
console.log(join(["a","b","c","d","e"]))