$(function () {
    //add plugin to use second attemp, alternative method for toggle
    //initCyle();

    //Bad example, version still a global variable even delcare with var keyword, as it is outside the function scope
    //alert(version);

    //Good example
    //$('h1').append("</br>" + MyGlobalOb.version);
    //$('h1').append("</br>" + MyGlobalOb.planet.name);


    //Degration gracefully
    $('#main').append("<button id='clickMe'><img src='plus-8.png' alt='Click me to see the paragraph' id='clickMeImg' /></button>");

    //first attemp, not working
    /*$('#clickMe').click(function () {
        //make use of jquery data storage utilities
        var clicks = $(this).data('clicks');
        //add number of clicks
        if (clicks) {
            $('#message').show('fast');
            $('#clickMeImg').removeAttr('src');
            $('#clickMeImg').attr('src', 'minus-8.png');
            alert("odd");
        }
        //even number of clicks
        else {
            $('#message').hide('slow');
            $('#clickMeImg').removeAttr('src');
            $('#clickMeImg').attr('src', 'plus-8.png');
            alert("even");
        }
    });*/

    //third attemp
    var clicks = true;
    $('#clickMe').click(function () {
        //make use of jquery data storage utilities
        //add number of clicks
        if (clicks) {
            $('#message').show('fast');
            //$('#clickMeImg').removeAttr('src');
            $('#clickMeImg').attr('src', 'minus-8.png');
            clicks = false;
            //alert("odd");
        }
            //even number of clicks
        else {
            $('#message').hide('slow');
            //$('#clickMeImg').removeAttr('src');
            $('#clickMeImg').attr('src', 'plus-8.png');
            clicks = true;
            //alert("even");
        }
    });

    $('#message').hide();

    //second attemp
    /*$('#clickMe').cycle([function () {
        $('#message').show('fast');
        $('#clickMe').attr('src', 'minus-8.png');
        alert("odd");
    }, function () {
        $('#message').hide('slow');
        $('#clickMe').attr('src', 'plus-8.png');
        alert("even");
    }], "onmouseover onmouseout");*/
});

//var version = "1.2";

var MyGlobalOb = {};

MyGlobalOb.version = "1.2";

MyGlobalOb.planet = {
    id: 1,
    name: "Tran Dinh Xu"
};

//=========================================Plugin to use cycle
function initCyle() {
    (function ($) {
        if (!Array.prototype.reduce) {
            Array.prototype.reduce = function reduce(accumulator) {
                if (this === null || this === undefined) throw new TypeError("Object is null or undefined");
                var i = 0,
                    l = this.length >> 0,
                    curr;

                if (typeof accumulator !== "function") // ES5 : "If IsCallable(callbackfn) is false, throw a TypeError exception."
                    throw new TypeError("First argument is not callable");

                if (arguments.length < 2) {
                    if (l === 0) throw new TypeError("Array length is 0 and no second argument");
                    curr = this[0];
                    i = 1; // start accumulating at the second element
                } else curr = arguments[1];

                while (i < l) {
                    if (i in this) curr = accumulator.call(undefined, curr, this[i], i, this);
                    ++i;
                }

                return curr;
            };
        }
        $.fn.cycle = function () {
            var args = Array.prototype.slice.call(arguments).reduce(function (p, c, i, a) {
                if (i == 0) {
                    p.functions = c;
                } else if (typeof c == "function") {
                    p.callback = c;
                } else if (typeof c == "string") {
                    p.events = c;
                }
                return p;
            }, {});
            args.events = args.events || "click";
            console.log(args);
            if (args.functions) {
                var currIndex = 0;

                function toggler(e) {
                    e.preventDefault();
                    var evaluation = args.functions[(currIndex++) % args.functions.length].apply(this);
                    if (args.callback) {
                        callback(currIndex, evaluation);
                    }
                    return evaluation;
                }
                return this.on(args.events, toggler);
            } else {
                //throw "Improper arguments to method \"alternate\"; no array provided";
            }
        };
    })(jQuery);
}
//=========================================End plugin code
