function inserindoNumeros(numeros){
var num = document.getElementById("result").innerHTML 
document.getElementById("result").innerHTML =  num + numeros
}

function limpar(){
    document.getElementById('result').innerHTML = ' '
}

function apagarDigito(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1)
}
function calculo(){
    var result = document.getElementById('result').innerHTML;
    if(result){
     document.getElementById('result').innerHTML = eval(result)
    }else{
      window.alert('Insira algum valor')
    }
}