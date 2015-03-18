/// <reference path="~/Scripts/jquery-2.1.3.js" />

/*$(function () {
    function buildACat(catName) {
        function catFactory() {
            //Functional scoping: in JS, the scope
            // of a variable is defined by its location within
            // the source code, and nested functions have access to variables declared in their outer (parental) scope
            //alert("cat Factory: " + catName);
            return catName;    
        }
        return catFactory(catName);
    }

    $('#userinput').click(function () {
        $('#userinput').val('');
    });

    $('#buildcat').click(function () {
        $('#catresult').empty();
        $('<p/>', {
            html: 'Here is your cat: ' + buildACat($('#userinput').val())
        }).appendTo($('#catresult'));
    });
});*/





//second attemp using closure

$(function () {
    function buildACat() {
        var catName = $('#userinput').val();
        function catFactory() {
            alert(catName);
        }
        
        //Notice: instead of executing it, it just
        //returns a reference!!! no () was included below
        return catFactory;
    }

    $('#buildcat').click(function () {

        //this create a closure of the buildACat() assign it to myNewCat
        // myNewCat now is bind with data, variable, value from buildACat()
        var myNewCat = buildACat();
        //buildACat() has executed. It has gone out of scope now,
        // and all its private function variables with it, right? right?

        myNewCat(); //<-- Not so fast ... the catName variable value LIVES!
    });
});

//Third attempt, introduce the Object Model pattern

a = (function () {

    //private function hides from user
    var privateFunction = function () {
        alert('Hello');
    }

    //public function that available to user to access value from the private function
    return {
        publicFunction: function () {
            privateFunction();
        }
    }
})();

//a.publicFunction();

//Testing Object Module pattern
$(function () {
    function makeSizer(size) {
        return function () {
            var temp = "size" + size;
            $('body').removeClass();
            $('body').addClass(temp);
        };
    }

    var size12 = makeSizer(12);
    var size14 = makeSizer(14);
    var size16 = makeSizer(16);

    $('#size-12').click(function () {
        size12();
    });
    $('#size-14').click(function () { size14(); });
    $('#size-16').click(function () { size16(); });


});