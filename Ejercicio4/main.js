//Obtememos las referencias a los elementos HTML
const boton = document.getElementById("boton_calcular");
const IMC = document.getElementById("imc_usuario");

//Conecto el boton a una funcion flecha
boton.addEventListener("click",() => { 
    const peso = parseFloat(document.getElementById("peso_usuario").value);
    const altura = parseFloat(document.getElementById("altura_usuario").value);
    let calculo = (peso / (altura**2)).toFixed(2);
    IMC.innerHTML = `<p>Tu IMC es de <strong>${calculo}</strong></p>`;
})

