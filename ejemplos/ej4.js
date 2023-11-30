var salida='';
function encontrarMayor(){
    var nA= parseInt(document.getElementById('nA').value);
    var nB= parseInt(document.getElementById('nB').value);
    var nC= parseInt(document.getElementById('nC').value);
    listarNumero(nA,nB,nC);
    limpiarCajas();
}
function limpiarCajas(){
    document.getElementById('nA').value='';
    document.getElementById('nB').value='';
    document.getElementById('nC').value='';
    document.getElementById('nA').focus();
}
function listarNumero(n1,n2,n3){
    salida+='<tr><td>'+n1+'</td><td>'+n2+'</td><td>'+n3+'</td><td>'+
            calcularMayor(n1,n2,n3)+'</td></tr>';
    document.getElementById('cuerpo').innerHTML=salida;

}
function calcularMayor(n1,n2,n3){
    if(n1>n2){
        if(n1>n3){
            mayor=n1;
        }
        else{
            mayor=n3;
        }
    }
    else{
        if(n2>n3){
            mayor=n2;
        }
        else{
            mayor=n3;
        }
    }
    return mayor;
}