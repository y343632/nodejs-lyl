function sum(arr){
    var total=0
    for (var i =0; i<arr.length; i++){
        total+=arr[i]
    }
    return total

}
var data=[1,2,5]
console.log(sum(data));