import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Room, RoomList } from './rooms.interface';
import { CommonModule } from '@angular/common';
import { RoomsList } from "./rooms-list/rooms-list"; // Debe importarse para poder usar *ngIf en el html que le corresponde


@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, RoomsList],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class Rooms implements OnInit{

  hotelName = 'Hilton Hotel'

  hideRooms = false

  unaClase = "odd"

  estilo = {
    backgroundColor:"#d20d48"
  }

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList : RoomList[] = []
  

  ngOnInit(): void {
    this.roomList = [
      {
      roomNumber: 1,
      roomType: 'Deluxe room',
      amenities: 'Air conditioner, free wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('12-nov-2021'),
      rating: 4.57104
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe room',
      amenities: 'Air conditioner, free wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('12-nov-2021'),
      rating: 5.06925
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe room',
      amenities: 'Air conditioner, free wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('12-nov-2021'),
      rating:4.34592
    }

    ]
  }

  numberOfRooms = 10

  toggle(){
    this.hideRooms = !this.hideRooms
  }

}
