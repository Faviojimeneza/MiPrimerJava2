var miVariableString = "Hola curso"


numeroInt= 10

var numFloat = 0.5

numeNeg = -6.4

var d = new Date()

var rsuma = 5+10

var rresta = 60 -14

rmultiplicacion = 48*27
rdivision = 1777/17

console.log("Esto es un mensaje por consola"+rdivision)

alert("Hola esto es una alerta")

function sumarConfuncion() {
 x=10
 y=20
 z=x+y

 return z

}

function multiplicaRara(ent1,ent2){
    return ent1 + ent2

}

j=sumarConfuncion()
k=multiplicaRara("a",6)

document.getElementById("sumFuncion").innerHTML=j
document.getElementById("multiFunc").innerHTML=k
document.getElementById("varString").innerHTML=miVariableString
document.getElementById("varInt").innerHTML=numeroInt
document.getElementById("varFloat").innerHTML=numFloat
document.getElementById("varnumeNeg").innerHTML=numeNeg
document.getElementById("fecha").innerHTML=d
document.getElementById("suma").innerHTML=rsuma
document.getElementById("resta").innerHTML =rresta
document.getElementById("multiplicacion").innerHTML=rmultiplicacion
document.getElementById("division").innerHTML=rdivision