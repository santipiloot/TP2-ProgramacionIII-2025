//Accedemos a los elementos HTML
const boton = document.getElementById("send_button");
const validaciones = document.getElementById("validations");

//Funcion para verificar nombre y apellido 
const validarTexto = (campo,valor,errores) => { 
    if (valor === "") {
        errores.push(`El ${campo} no puede estar vacío`);
    } else if (valor.length > 50) {
        errores.push(`El ${campo} no puede exceder los 50 caracteres`);
    }
}

//Funcion flecha conectada al boton
boton.addEventListener("click", () => { 
    //Accedemos a los valores de los input
    const nombre = document.getElementById("user_name").value;
    const apellido = document.getElementById("user_lastname").value;
    const edad = parseFloat(document.getElementById("user_age").value);
    const altura = parseFloat(document.getElementById("user_height").value);
    const email = document.getElementById("user_email").value;

    //Creamos una arreglo para los errores
    let errores = [];

    //Validamos que edad y apellido no esten vacios ni sean mayores a 50 caracteres 
    validarTexto("nombre",nombre,errores);
    validarTexto("apellido",apellido,errores);

    //Validamos que la edad no sea negativa ni menor de edad 
    if(edad<=0){ 
        errores.push("Ingresa una edad valida");
    }else if (edad<18){
        errores.push("No puedes registrarte si eres menor de edad");
    }
    //Validamos que la altura sea valida 
    if(altura<=0){ 
        errores.push("Ingresa una altura valida");
    }else if (altura>230){
        errores.push("No puedes ingresar una altura mayor a 230cm");
    } 

    //Validamos si el email esta vacio y si incluye el alrroba
    if (email===""){ 
        errores.push("El email no puede estar vacio");
    } else if (!email.includes("@")) {
            errores.push("El email debe contener un @");
    }


    if(errores.length>0){ 
        validaciones.innerText = errores.join("\n")
        validaciones.style.color = "red";
    } else { 
        validaciones.innerText= "Registro correcto"
        validaciones.style.color = "green";
    }
    
});
