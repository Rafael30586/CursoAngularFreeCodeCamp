"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    getNameAndAddress() {
        return `Name: ${this.name}, Address: ${this.address}`;
    }
    login() {
        return { name: "Rafael", id: 1, email: "fraq86@gmail.com" };
    }
}
let e = new Employee();
e.id = 1;
e.name = "John";
e.address = "Guillermo Clinton 501";
console.log(e);
console.log(e.getNameAndAddress());
