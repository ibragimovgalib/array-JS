// 1 Return the First Elements in an Array----------------
function getFirstValue(arr) {
    return arr[0]
}
console.log(getFirstValue([1, 2, 3]));



// 2 Return the Last Element in an Array----------------
function getLastItem(arr) {
    return arr[arr.length-1]
}
console.log(getLastItem([1, 2, 3]));



// 3 Reverse an Array-------------------------------------
function reverse(arr){
    return arr.reverse()
}
console.log(reverse([1, 2, 3, 4]));




// 4 Convert an Array to a String------------------------------
function arrayToString(arr){
    return arr.join("")
}
console.log(arrayToString([1, 2, 3, 4, 5]));




// 5 Array Indexing------------------------------------------------
function valueAt(arr, i){
    return arr[Math.floor(i)]
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt([1, 2, 3, 4, 5, 6], 6.5353 / 2));



// 6 Concatenating Two Integer Arrays-------------------------------
function concat(arr1, arr2){
    return arr1.concat(arr2)
}
console.log(concat([1, 3, 5], [2, 6, 8]));




// 7 Find the Index---------------------------------------------------
function findIndex(arr, find) {
    return arr.indexOf(find)
}
console.log(findIndex(["hi", "abc", "hello", "blue"], "hello"));




// 8 Return Types----------------------------------------------------------
function arrayValuesTypes(arr){
    return arr.map((e)=>{
        return typeof(e)
    })
}
console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes([231, true, "float", null]));



// 9 Convert All Array Items to String------------------------------------
function parseArray (arr){
    return arr.map((e)=>{
        return e.toString()
    })
}
console.log(parseArray([1, 2, "a", "b"]));



// 10 Array of Word Lengths-------------------------------------------------
function wordLengths(arr) {
    return arr.map((e)=>{
        return e.length
    })
}
console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["helloooo", "w"]));




// 11 Filter out Strings form an Array--------------------------------------
function filterArray(arr) {
    return arr.filter((e)=>{
        if(typeof(e)=='number') return e
    })
}
console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, 2, "a", "b", 123, "555"]));




// 12 How Much is True? -???????????????????????????????????????????????
function coutTrue(arr) {
    let fil = ""
    let rez = arr.forEach((e)=>{
        if(e == true) fil+=e
        return fil
    })
    return rez.length
}
console.log(coutTrue([true, false, false, true, false]));
console.log(coutTrue([false, false, false]));
console.log(coutTrue([]));





// Fined the Second Largest Number----------------------------------------------
