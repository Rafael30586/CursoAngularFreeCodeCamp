"use strict";
let variable = "Hola mundo";
console.log(variable);
let numeros = [3, 19, 20, 81, 38];
let numero = numeros.find(n => n === 20);
console.log(numero);
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
const funcion = (x) => 2 * x;
console.log(funcion(3));
function sumarDosOTres(x, y, z) {
    if (z != undefined)
        return x + y + z;
    else
        return x + y;
}
console.log(sumarDosOTres(4, 18, 52));
console.log(sumarDosOTres(65, 8));
function multiplicarDos(x, y = 4) {
    return x * y;
}
