import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../global-config';
import { Observable, catchError, throwError } from 'rxjs';
import { BookingData } from '../entityclasses/booking-data';

@Injectable({
	providedIn: 'root'
})
export class BookingsService {

	baseApiUrl: string = BASE_API_URL + 'booking'; // global bar located in app/config.ts
	headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private httpClient: HttpClient) {}

	handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		return throwError(
			'Something bad happened; please try again later.');
	};

	listAllBookingDatas(): Observable<any> {
		return this.httpClient.get(this.baseApiUrl).pipe(
			catchError(this.handleError)
		);
	}

	getBookingDataById(id: any): Observable<any> {
		let fullUrl: string = `${this.baseApiUrl}/${id}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

	getBookingDataByCustomerId(id: any): Observable<any> {
		let fullUrl: string = `${this.baseApiUrl}/customer/${id}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

	updateBookingData(id: any, data: BookingData): Observable<any> {
		let fullUrl: string = `${this.baseApiUrl}/${id}`;
		console.log(fullUrl);
		return this.httpClient.put(fullUrl, data).pipe(catchError(this.handleError));
	}
}
