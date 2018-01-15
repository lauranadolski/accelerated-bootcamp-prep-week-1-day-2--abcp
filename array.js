function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
var newarray = (element, ...array);
return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
array.unshift(element);
}

function addElementToEndOfArray(array, element) {
var newarray = (...array, element);
return newarray;
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element);
}

function accessElementInArray(array, index) {
return (array[index]);
}

////////


function destructivelyRemoveElementFromBeginningOfArray(array) {

}

function removeElementFromBeginningOfArray(array) {
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
