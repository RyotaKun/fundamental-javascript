/// <reference path="~/Scripts/jquery-2.1.3.js" />
$(function () {
    $('#tabs').tabs();

    //Dynamically add/remove tabs with append/remove
    var tab_num = $('div#tabs ul li').length + 1;
    $('div#tabs ul').append('<li><a href="#tab'+ tab_num + '">Tab '+ tab_num +'</a></li>');

    $('div#tabs').append('<div id="tab' + tab_num + '"><p>New paragraph</p></div>');

    //add a page to a new tab NOT FOUND A WORKING SOLUTION YET
    tab_num++;

    //It is also possible to use #tabs.ui-tabs-nav to point to the tab id
    $('div#tabs ul').append('<li><a href="#tab' + tab_num + '">Tab ' + tab_num + '</a></li>');

    $('div#tabs').append('<div id="tab' + tab_num + '"><iframe src="http://eportfolio.acseducation.edu.au/view/view.php?id=25552" width="100%" height="500px"><a href="http://eportfolio.acseducation.edu.au/view/view.php?id=25552">http://eportfolio.acseducation.edu.au/view/view.php?id=25552</a></iframe></div>');

    //$('div#tabs').append('<div id="tab' + tab_num + '"><iframe src="...????.../Module16___jQuery_Events/index.html" width="100%" height="500px"><a href="#">Click me!</a></iframe></div>');
    $('div#tabs').tabs('refresh');

    $('#datepicker').datepicker({
        onSelect: function (dateText, inst) {
            $('#title').text("You have picked: " + dateText);
        }
    });
});