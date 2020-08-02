// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//create a function that takes in a string
const codedMessage = (string) => {
    //create a new variable that splits the string into an array
    let toArr = string.split("")
    //use a map method to check each letter of the array. return result.
    return toArr.map(value => {
        //if the letter is the string of a, change it to a string of 4
        if (value === "a") {
           return value = "4"
        //else if the letter is the string of e, change it to a string of 3
        } else if (value === "e") {
            return value = "3"
        //else if the letter is the string of i, change it to a string of 7
        } else if (value === "i") {
            return value = "7"
        //if the letter is the string of o, change it to a string of 0
        } else if (value === "o") {
            return value = "0"
        //else, return the original letter
        } else {
            return value
        }
    //convert array back to a string
    }).join("")
}

// console.log(codedMessage(secretCodeWord1));
// console.log(codedMessage(secretCodeWord2));


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//create a function that takes in an array
const checkForA = (array) => {
    //use the filter method and return the result
    return array.filter(value =>{
        //return only the values that include A or a
        return value.includes('A') || value.includes('a')
    })
}

// console.log(checkForA(arrayOfWords));


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

//create a function that takes in an array
const fullHouse = (array) => {
    //sort the array in order from lowest to highest numbers
    let sortArr = array.sort(function(a,b){return a-b})
        //if the value at index 0 is equal to the value at index 1 AND if the value at index 1 is equal to the value at index 2 AND if the value at index 3 is equal to the value at index 4
        if ((sortArr[0] === sortArr[1]) && 
            (sortArr[1] === sortArr[2]) &&
            (sortArr[3] === sortArr[4])){
            //return true
            return true
        //if the value at index 0 is equal to the value at index 1 AND if the value at index 2 is equal to the value at index 3 AND if the value at index 3 is equal to the value at index 4
        } else if (
            (sortArr[0] === sortArr[1]) && 
            (sortArr[2] === sortArr[3]) &&
            (sortArr[3] === sortArr[4])){
            //return true
            return true
        //otherwise, return false
        } else {
            return false
        }
}

// console.log(fullHouse(hand1))
// console.log(fullHouse(hand2))
// console.log(fullHouse(hand3))