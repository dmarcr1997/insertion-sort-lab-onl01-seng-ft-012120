function findMinAndRemove(array){
    let minNum = array[0]
    let aryIndex = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < minNum) {
            minNum = array[i]
            aryIndex = i
        }
    }
    array.splice(aryIndex, 1)
    return minNum
}

function insertionSort(array){
    let sort = []
    while(array.length !== 0){
       sort.push(findMinAndRemove(array)) 
    }
    return sort
}
