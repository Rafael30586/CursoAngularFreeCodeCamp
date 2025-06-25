import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'hinv-root', // el que viene por defecto es app-root, le he cambiado el nombre en el archivo angular.json y y en el index.html
  imports: [RouterOutlet],
  templateUrl: './app.html',
  /*template: `<h1>Hello world from inline template</h1>
   <p>Angular is awesome</p>`,*/
  styleUrl: './app.css'
})
export class App {
  protected title = 'hotelinventoryapp2';
}
