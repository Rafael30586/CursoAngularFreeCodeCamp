import { Login } from './interface'
import { User } from './interface'

class Employee implements Login{

    id!: number
    name!: string
    address!: string

    getNameAndAddress():string{
        return `Name: ${this.name}, Address: ${this.address}`
    }

    login(): User {
        return {name: "Rafael", id : 1, email: "fraq86@gmail.com"}
    }
}

let e = new Employee()

e.id = 1
e.name = "John"
e.address = "Guillermo Clinton 501"

console.log(e)
console.log(e.getNameAndAddress())