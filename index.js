var cadenai = require ("./cadena"); 

const str = 'hannah';

var a = cadenai.esPalindromoe(str);
var b = cadenai.numConsonantese(str);
var c = cadenai.numLetrase(str);
var d = cadenai.numPalabrase(str);
var e = cadenai.numVocalese(str);


console.log("Es palindromo?  : "+ a);
console.log("Numero de constantes  : "+ b);
console.log("Numero de letras  : "+ c);
console.log("Numero de palabras  : "+ d);
console.log("Numero de vocales  : "+ e);