import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Room } from './rooms.interface';
import { CommonModule } from '@angular/common'; // Debe importarse para poder usar *ngIf en el html que le corresponde

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class Rooms {

  hotelName = 'Hilton Hotel'

  hideRooms = false

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  numberOfRooms = 10

  toggle(){
    this.hideRooms = !this.hideRooms
  }

}
