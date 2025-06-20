"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "Rafael", id: 1, email: "fraq86@gmail.com" };
let empleado = { name: "Sub_zero", id: 381, email: "subzero@gmail.com", salary: 5000000 };
let { name: nombre, email: correoElectronico } = { name: "Dante", id: 456, email: "dante@gmail.com" };
//Cuando se hace destructuring de objetos, pueden renombrarse las propiedades, en este ejemplo name se reemaplaza por nombre e email por correoElectronico
console.log(nombre);
console.log(correoElectronico);
