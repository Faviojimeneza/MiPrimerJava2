var rnota1
var rnota2
var rnota3
//var resultadonota = rnota1+rnota2+rnota3/3



rnota1=prompt('Ingrese la nota 1:');
rnota2=prompt('Ingrese la nota 2:');
rnota3=prompt('Ingrese la nota 3:');

resultadonota=parseFloat(rnota1)+parseFloat(rnota2)+parseFloat(rnota3);
promedio= resultadonota/3;

document.write('El promedio de nota es:', + promedio);
if (promedio>=3){
    document.getElementById("rresultadonotas").innerHTML="Ganó";    
}

else {
    document.getElementById("rresultadonotas").innerHTML="Perdió";
}
document.getElementById("nota1").innerHTML=rnota1
document.getElementById("nota2").innerHTML=rnota2
document.getElementById("nota3").innerHTML=rnota3
document.getElementById("rresultadonotas").innerHTML=rresultadonota