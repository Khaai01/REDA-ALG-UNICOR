var salida='';
function calificacion(){
    var nombre= (document.getElementById('nombre').value)
    var apellido= (document.getElementById('apellido').value)
    var nota1= parseInt(document.getElementById('nota1').value);
    var nota2= parseInt(document.getElementById('nota2').value);
    var nota3= parseInt(document.getElementById('nota3').value);
    listarNumero(nombre, apellido, nota1, nota2, nota3);
    limpiarCajas();
}
function limpiarCajas() {
    document.getElementById('nombre').value="";
    document.getElementById('apellido').value="";
    document.getElementById('nota1').value="";
    document.getElementById('nota2').value="";
    document.getElementById('nota3').value="";
    document.getElementById('nombre').focus(); 
}
function listarNumero(nombre, apellido, nota1, nota2, nota3) {
    salida+='<tr><td>'+nombre+'</td><td>'+apellido+'</td><td>'+nota1+'</td><td>'+nota2+'</td><td>'+nota3+'</td><td>'
    +promedio(nota1, nota2, nota3)+'</td><td>'+valoracion(nota1, nota2, nota3)+'</td><td>'
    +rendimiento(nota1, nota2, nota3)+'</td></tr>'
    document.getElementById('cuerpo').innerHTML=salida;
}
function promedio(nota1, nota2, nota3) {
    prom=(nota1 + nota2 + nota3) / 3;
    if (prom < 3) {
        text= '<p style="color: red;">'+prom+'</p>';
    }
    else {
        text= '<p style="color: blue;">'+prom+'</p>';
    }
    return text;
  }
function valoracion(nota1, nota2, nota3) {
    pro=(nota1 + nota2 + nota3) / 3; 
    if (pro < 3) {
        text1= '<p style="color: red;">Reprobo</p>';
    }
    else {
        text1= '<p style="color: blue;">Aprobo</p>';
    }
    return text1;
}
function rendimiento(nota1, nota2, nota3) {
    let pro1=(nota1 + nota2 + nota3) / 3;
    let mayor=""; 
    if (pro1<2) {
        mayor= '<p style="color: red;">Insuficiente</p>';
    } else {
        if (pro1<3) {
            mayor= '<p style="color: red;">Deficiente</p>';
        } else 
            if (pro1<3.5) {
                mayor= '<p style="color: Blue;">Aceptabel</p>';
            } else 
                if (pro1<4) {
 
                    mayor= '<p style="color: blue;">Bueno</p>';
                } else 
                    if (pro1<4.5) {
                        mayor= '<p style="color: blue;"Sobresaliente</p>';
                    } else 
                        if (pro1<=5) {
                            mayor= '<p style="color: blue;">Excelente</p>';
                        }
            }
    return mayor;
}