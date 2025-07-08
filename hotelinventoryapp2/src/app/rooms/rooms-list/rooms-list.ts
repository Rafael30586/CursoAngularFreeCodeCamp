import { Component, Input, OnInit } from '@angular/core';
import { Rooms } from '../rooms';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms.interface';

@Component({
  selector: 'hinv-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.css'
})
export class RoomsList implements OnInit{

  @Input() rooms: RoomList[] = []

  unaClase

  constructor(){
    this.unaClase = "odd" 
  }

  ngOnInit(): void {
    
  }
  
}
