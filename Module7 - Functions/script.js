function myFirstFunction() {
    alert("First try");

}
//myFirstFunction();

function mySecondFunction(input) {
    alert("Here is your input: " + input);
}
//mySecondFunction("Sang");

function myThirdFunction(input1, input2) {
    return input1 + input2;
}

document.write(myThirdFunction(3, 5));