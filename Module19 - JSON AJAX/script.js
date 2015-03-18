/// <reference path="Scripts/jquery-2.1.3.js" />
$(function () {
    
    $('#clickme').click(function () {

        //this method if the json file is not accessible, nothign will happen
        /*$.getJSON('https://api.myjson.com/bins/1fnxv', function (data) {
            var items = [];
            $.each(data, function (key, val) {
                items.push('<li id="' + key + ' ">' + key + " : " + val + '</li>');
            });
            $('<ul/>', {
                'class': 'todo-list',
                html: items.join('')
            }).appendTo('body');
        });*/

        //Clean result area
        //$('p#result').empty();

        //alternative, good method
        //use this to handling file not file from the server
        $.ajax({
            url: 'https://api.myjson.com/bins/1fnxv',
            //url: 'data.json',
            dataType: 'json',
            success: function (data) {
                var items = [];
                $.each(data, function (key, val) {
                    items.push('<li id="' + key + '">' + key + " : " + val + '</li>');
                });
                $('<ul/>', {
                    'class': 'todo-list',
                    //join all the item in the li array
                    html: items.join('')
                }).appendTo('p#result');
            },
            statusCode: {
                404: function () {
                    alert('JSON file is not accessible');
                }
            }
        });

    });
});