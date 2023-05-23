import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../global-config";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { Customer } from "../entityclasses/customer";

@Injectable({
  providedIn: "root",
})
export class CustomersService {
  baseApiUrl: string = BASE_API_URL + "customers"; // global bar located in app/config.ts
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private httpClient: HttpClient) {}

  listAllCustomers(): Observable<any> {
    return this.httpClient
      .get(this.baseApiUrl)
      .pipe(catchError(this.handleError));
  }
  create(code: Customer): Observable<any> {
    console.log(`${this.baseApiUrl}/customers`, code);
    return this.httpClient
      .post(`${this.baseApiUrl}/customers`, code)
      .pipe(catchError(this.handleError));
  }

  getCustomerById(id: any): Observable<any> {
    console.log(`${this.baseApiUrl}/${id}`);
    return this.httpClient
      .get(`${this.baseApiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  delete(id:any): Observable<any> {
    console.log(`${this.baseApiUrl}/customers`);
    return this.httpClient
      .delete(`${this.baseApiUrl}/customers`,id)
      .pipe(catchError(this.handleError));
  }
  
  update(code: Customer,id:any): Observable<any> {
    console.log(`${this.baseApiUrl}/customers`);
    return this.httpClient
      .put(`${this.baseApiUrl}/customers`, code,id)
      .pipe(catchError(this.handleError));
  }
}
