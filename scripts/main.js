import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Practicas esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingenieria de software para la web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, false, 2020),
    new Curso("principios de diseño y arquitectura", 30, 75, true, 2020)];
export var ap = new Aprendiz("Juan pablo", "reyes gomez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
var btnfiltro = document.getElementById("boton-filtro");
var textoBusqueda = document.getElementById("texto-busqueda");
btnfiltro.onclick = /*filtrarPorNombre;*/ function () {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    //let cursosFiltrados:Curso[]= ap.cursos.filter(function(c){return c.nombre.match(text);});
    mostarCursosAprendiz(cursosFiltrados);
};
/*function filtrarPorNombre():void{
    let text:string = textoBusqueda.value;
    text = (text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados:Curso[]= ap.cursos.filter(function(c){return c.nombre.match(text);});
    mostarCursosAprendiz(cursosFiltrados);
}*/
mostarDatosAprendiz(ap);
mostarEstadisticas(ap);
mostarCursosAprendiz(ap.cursos);
function mostarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>" + aprendiz.nombres + "</td</tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td</tr>\n    <tr><td>Nivel Educativo:</td><td>" + aprendiz.nivelEducativo + "</td</tr>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td</tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados</b></td><td>" + numeroCertificados + "</td>";
    estadisticasTable.appendChild(trElement);
}
function mostarCursosAprendiz(cursos) {
    var cursosTbody = document.createElement("tbody");
    var estado = cursos.map(function (c) { return (c.calificacion > 60) ? 'green' : 'red'; });
    var index = 0;
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + curso.nombre + "</td>\n        <td>" + curso.horas + "</td>\n        <td style=\"color:" + estado[index] + "\">" + curso.calificacion + "</td>\n        <td>" + curso.certificado + "</td>\n        <td>" + curso.anio + "</td>";
        cursosTbody.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(cursosTbody);
}
