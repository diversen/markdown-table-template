# Readme

tiny js lib for creating markdown table templates from number of rows and columns.

example: 

    var table = require("markdown-table-template");
    console.log(table.create(0,0)); // nothing
    console.log(table.create(1,1)); // 1 row and 1 col
    console.log(table.create(3,7)); // 3 rows and 7 cols

Like this: 

    |0:0|

    |0:0|0:1|0:2|
    |---|---|---|
    |2:0|2:1|2:2|
    |3:0|3:1|3:2|
    |4:0|4:1|4:2|
    |5:0|5:1|5:2|
    |6:0|6:1|6:2|
    |7:0|7:1|7:2|