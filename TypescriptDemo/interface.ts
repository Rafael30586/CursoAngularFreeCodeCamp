export interface User {
    name: string
    age?: number
    id: number
    email: string
}

let user: User = {name: "Rafael", id : 1, email: "fraq86@gmail.com"}

interface Employee2 extends User {
    salary: number
}

let empleado: Employee2 = {name: "Sub_zero", id: 381, email: "subzero@gmail.com", salary: 5000000}

export interface Login {
    login(): User
}

let {name : nombre, email : correoElectronico} : User= {name: "Dante", id:456, email:"dante@gmail.com"}
//Cuando se hace destructuring de objetos, pueden renombrarse las propiedades, en este ejemplo name se reemaplaza por nombre e email por correoElectronico
console.log(nombre)
console.log(correoElectronico)