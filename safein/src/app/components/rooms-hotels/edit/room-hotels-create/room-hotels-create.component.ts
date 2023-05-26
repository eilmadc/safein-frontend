import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/_services/hotels.service';
import { RoomsService } from 'src/app/_services/rooms.service';
import { Hotel } from 'src/app/entityclasses/hotel';
import { Room } from 'src/app/entityclasses/room';

@Component({
	selector: 'app-room-hotels-create',
	templateUrl: './room-hotels-create.component.html',
	styleUrls: ['./room-hotels-create.component.scss']
})
export class RoomHotelsCreateComponent implements OnInit {

	currentRoom: Room = new Room;
	hotelList: Hotel[] = [];
	hotelId: any = 0;
	currentHotel: Hotel = new Hotel;

	constructor(private roomsService: RoomsService, private hotelService: HotelsService) {
	}


	assignHotel(hotel: Hotel) {

		this.currentHotel = hotel;
	}

	ngOnInit(): void {
		this.hotelService.listAllHotels().subscribe(
			{
				next: (hotels: Hotel[]): void => {
					this.hotelList = hotels;
					console.log(this.hotelList);
				},
				error: (error: any): void => { console.log(error) }
			}
		)
	}

	getHotelById(id: any) {
		this.hotelService.getHotelById(id).subscribe(
			{
				next: (hotel: Hotel): void => {
					this.currentHotel = hotel;
					console.log(this.hotelList);
				},
				error: (error: any): void => { console.log(error) }
			}
		)
	}


	showCapturedClass() {
		this.currentRoom.hotel = this.currentHotel;
		console.log(this.currentRoom);
	}

	insertNewRoom(): void {
		this.currentRoom.hotel = this.currentHotel;
		this.roomsService.createRoom(this.currentRoom).subscribe({
			next: response => {
				console.log(response);
			},

			error: error => { console.log(error) }
		}
		)
	}
}
