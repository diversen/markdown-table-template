"use strict";

var isInt = function(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
};

var create = function (rows, columns) {

    if (!isInt(rows) || !isInt(columns) || rows === 0 || columns === 0) {
        return '';
    }

    var c_columns = 0;
    var str = '';
    for (var x = columns +1; x > 0; x--) {
        
        if (c_columns !== 1) {
            str+=generateRow(rows, c_columns);
            if (columns === 1) {
                //return str;
                break;
            } 
        } else {
            str+=generateEmptyRow(rows);
            
        }
        c_columns++;
        
    } 
    return str;
};

var generateEmptyRow = function (rows) {

    var str = '';
    for (var x = rows; x > 0; x--) {
        str+= '|' + '---'; 
        
    }
    return str + '|' + "\n";
};

var generateRow = function (row_number, col_number) {
    
    var c_rows = 0;
    var str = '';
    for (var x = row_number; x > 0; x--) {
        str+= '|' + col_number + ':' + c_rows++ ; 
        
    }
    return str + '|' + "\n";
};

module.exports = {
  create: create
};
