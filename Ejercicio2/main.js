//Apuntamos a los elementos HTML
const boton = document.getElementById("boton_calcular");
const areaTotal = document.getElementById("areaTotal");

//Funcion de respuesta del boton
boton.addEventListener("click", () => { 
    //Obtemos los valores ingresados
    const A = parseFloat(document.getElementById("medida_A").value);
    const B = parseFloat(document.getElementById("medida_B").value);
    const C = parseFloat(document.getElementById("medida_C").value);

    //Verificamos si ingreso datos
    if (isNaN(A) || isNaN(B) || isNaN(C)){ 
        return alert("Ingresa valores para calcular");
    }

    //Calculamos las areas por figuras separadas 
    let areaRectangulo = B * C; 
    let areaTriangulo = (B * (A - C)) / 2

    //Area total
    let area = areaRectangulo + areaTriangulo;

    //Ingresamos el area al elemento P
    areaTotal.innerText = area.toFixed(2) + "m²";
})