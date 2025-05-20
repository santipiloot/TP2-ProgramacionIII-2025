//Obtememos las referencias a los elementos HTML
const boton = document.getElementById("boton_calcular");

//Conecto el boton a una funcion flecha
boton.addEventListener("click",() => { 
    const peso = parseFloat(document.getElementById("peso_usuario").value);
    const altura = parseFloat(document.getElementById("altura_usuario").value);
    let calculo = (peso / (altura**2)).toFixed(2);
    alert(`Tu IMC es de ${calculo}`);
})

