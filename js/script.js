/**
 * Created by gurpreet on 17/01/17.
 */

$(document).ready(function () {
    var toSearch;
    $("#search").bind("enterKey", function (data) {
        toSearch = data;
    });
    var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var callback = '&callback=JSON_CALLBACK';
    $.getJSON(api + toSearch + callback, function (json) {
        console.log(api + toSearch);
        $.each(json.query.pages, function (key, value) {
            console.log(key + " " + value);
        });
    });
});