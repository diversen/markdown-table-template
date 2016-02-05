# Readme

tiny js lib for creating markdown table templates from number of rows and columns.

example: 

Node-like systems: 

    var mdtable = require("markdown-table-template");

Browser: 

    // <script src = "dist/mdtable.js"></script>

    console.log(mdtable.create(0,0)); // nothing
    console.log(mdtable.create(1,1)); // 1 row and 1 col
    console.log(mdtable.create(3,7)); // 3 rows and 7 cols

yields: 

    |0:0|

    |0:0|0:1|0:2|
    |---|---|---|
    |2:0|2:1|2:2|
    |3:0|3:1|3:2|
    |4:0|4:1|4:2|
    |5:0|5:1|5:2|
    |6:0|6:1|6:2|
    |7:0|7:1|7:2|
