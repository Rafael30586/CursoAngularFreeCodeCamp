let variable: string = "Hola mundo"

console.log(variable)

let numeros: number[] = [3,19,20,81,38]

let numero = numeros.find(n => n===20)

console.log(numero)

enum Color { // Ejemplo de enums en typescript
    Green,
    Red,
    Blue
}

let c: Color = Color.Blue 

const funcion = (x: number) => 2*x

console.log(funcion(3))

function sumarDosOTres(x: number,y: number,z?: number): number{ // El signo de preguntas sirve para hacer a un parametro opcional
    if(z!=undefined) return x + y + z
    else return x + y
}

console.log(sumarDosOTres(4,18,52))
console.log(sumarDosOTres(65,8))

function multiplicarDos(x:number,y=4): number{ // Se puede dar valores por defecto a los parámetros
    return x*y
}