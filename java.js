function validar_longitud(longitud){
    if (longitud === 0 || longitud === null || longitud === undefined){
        return "Debe ingresar la longitud";
    } 
    if (!Number.isInteger(longitud) || longitud <= 0){
        return "La longitud recibida no es valida";
    }
    if(longitud <= 3){
        return  "La longitud debe ser mayor o igual a 3";
    }
    if(longitud >= 10){
        return "La longitud debe ser menor o igual a 10";
    }  
    return longitud
    
}

function generarContraseña(longitud, incluirespeciales, incluirnumeros, incluirmayusculas){
    const validacion = validar_longitud(longitud);

    if(typeof validacion === "string"){
        return validacion;
    }

    const minusculas = "abcdefghijklmnñopqrstuvwxyz"
    const mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    const numeros = "1234567890"
    const especiales = "!#$%&*+"


    // las minusculas son siempre las bases de las contraseñas
    // por eso iniciamos la variable caracteres así
    let caracteresIncluir = minusculas;

    if (incluirmayusculas){
        caracteresIncluir += mayusculas;
    }
    if (incluirespeciales){
        caracteresIncluir += especiales;
    }
    if(incluirnumeros){
        caracteresIncluir += numeros;
    }

    if (caracteresIncluir.length === 0) {
        return "No hay caracteres seleccionados para generar la contraseña.";
    }

    let contraseña = "";

    const longitudIncluir = caracteresIncluir.length;

    for (let i = 0; i <= longitud; i++){
        const aleatorio = Math.floor(Math.random()*longitudIncluir);
        contraseña += caracteresIncluir[aleatorio];
    }

    return contraseña;

}

const p1 = generarContraseña(8, false, false, false);
console.log(`P1: Longitud 8, solo minúsculas. Contraseña: ${p1}`);

const p3_corta = generarContraseña(2, true, true, true);
console.log(`P3: Longitud 2. Resultado: ${p3_corta}`);
// Salida: La longitud debe ser mayor o igual a 3

const p4_invalida = generarContraseña("abc", true, true, true);
console.log(`P4: Longitud "abc". Resultado: ${p4_invalida}`);
// Salida: La longitud recibida no es válida