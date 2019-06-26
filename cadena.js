/*	• Recibe una cadena
	• Verifica si es palindromo
	• Cuenta el numero de paralas en la cadena
	• Cuenta el numero de letras sin espaciones
	• Cuenta el numero de vocales
	• Cuentra el numero de consonantes
Imprime toda la informacion */
function esPalindromo(cadena){

    return cadena.replace(/ /g, '').split('').join('') == cadena.replace(/ /g, '').split('').reverse().join('');
}
function numPalabras(cadena){
    return cadena.split(" ").length;
}
function numLetras(cadena){
    return cadena.split(" ").join("").length;
}
function numVocales(cadena){
    return cadena.match(/[aeiou]/gi).length;
}

function numConsonantes(cadena){
    return cadena.match(/[bcdfghjklmnpqrstvwxyz]/gi).length
}

module.exports.esPalindromoe = esPalindromo;
module.exports.numConsonantese = numConsonantes;
module.exports.numLetrase = numLetras;
module.exports.numPalabrase = numPalabras;
module.exports.numVocalese = numVocales;