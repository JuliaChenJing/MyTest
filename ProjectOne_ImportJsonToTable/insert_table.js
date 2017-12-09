"use strict";

var table_data = [{
    first_name: 'Rose',
    last_name: 'Tyler',
    home: 'Earth'
},
{
    first_name: 'Zoe',
    last_name: 'Heriot',
    home: 'Space Station W3'
},
{
    first_name: 'Jo',
    last_name: 'Grant',
    home: 'Earth'
},
{
    first_name: 'Leela',
    last_name: null,
    home: 'Unspecified'
},
{
    first_name: 'Romana',
    last_name: null,
    home: 'Gallifrey'
},
{
    first_name: 'Clara',
    last_name: 'Oswald',
    home: 'Earth'
},
{
    first_name: 'Adric',
    last_name: null,
    home: 'Alzarius'
},
{
    first_name: 'Susan',
    last_name: 'Foreman',
    home: 'Gallifrey'
}];


// Builds the HTML Table out of table_data.
function buildHtmlTable(selector) {
    var columns = addAllColumnHeaders(table_data, selector);

    for (var i = 0; i < table_data.length; i++) {
        var row$ = $('<tr  class="success"/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = table_data[i][columns[colIndex]];
            if (cellValue == null||cellValue =="Unspecified") cellValue = "";
            row$.append($('<td/>').html(cellValue));
        }
        $(selector).append(row$);
    }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(table_data, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr class="info"/>');

    for (var i = 0; i < table_data.length; i++) {
        var rowHash = table_data[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $(selector).append(headerTr$);

    return columnSet;
}

console.log(table_data);