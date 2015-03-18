//variable in javascript is function scope
/*
if(true)
{
    var x = 5;
}
alert(x);
*/

//Global scope
myScope = "global";
myOtherScope = "global2";
(function () {
    var myScope2 = "function";
    if (true) { var myOtherScope = "function2"; } //even if it is in the scope of it, still apply to the function scope
    document.write("Inside of the function scope: " + myScope + " " + myScope2);
    document.write("</br>Inside of the function scope2: " + myOtherScope);
})();
document.write("</br>Outside of the function scope: " + myScope);
document.write("</br>Outside of the function scope2: " + myOtherScope);
//document.write("</br>Outside of the function scope: " + myScope2); //Function scope variable cannot be accessed outside

document.write("</br>Global variable is the DOM: " + window.myScope);
//alert(window.myScope);