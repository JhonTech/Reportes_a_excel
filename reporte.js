var XLSX = require("xlsx");

let info_alumnos = ['Daniel','Murillo Ocoro', '12/02/2000']

var jeson = {
    "Nombre":"",
    "Apellidos":"",
    "Fecha_Nacimiento":""
   };

jeson.Nombre = info_alumnos[0];
jeson.Apellidos = info_alumnos[1];
jeson.Fecha_Nacimiento = info_alumnos[2];

var data = [];
data.push(jeson);
//console.log(data);
//Si el componente xlsx no se importa, entonces importe
if(typeof XLSX == 'undefined') XLSX = require('xlsx');
//Crear hoja de trabajo
var ws = XLSX.utils.json_to_sheet(data);
//Cree un libro de trabajo vacío y luego agregue la hoja de trabajo
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "People");
//Generar archivo xlsx
XLSX.writeFile(wb, "reporte.xlsx");
