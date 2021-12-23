function valorparaimpostosnoano(){
    var salario=document.getElementById("salariomensaldotrabalhador")
    salario=Number(salario.value)
    valorbrutototalnoano=salario*13
    vbtnaemreal=valorbrutototalnoano.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
    valorparaimpostos=(salario/31)*149
    vpiemreal=valorparaimpostos.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
    alert(`O valor para impostos, em aproximação, corresponde a ${vpiemreal} sendo ${vbtnaemreal} o salário anual considerando o 13º.`)
}