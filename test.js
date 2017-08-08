var Workbook = require('xlsx-populate');
var XLSX = require('xlsx');
var workbook = Workbook.fromFileSync("./try.xlsx");

//set the cell value in input sheet
var cell=workbook.getSheet("Sheet1").getCell("A1").setValue(100);

workbook.toFileSync("./out.xlsx");
var wb = XLSX.readFile('./out.xlsx');
var val=wb.Sheets['Sheet1']['A1'];
//print the cell value from output sheet
console.log(val);
