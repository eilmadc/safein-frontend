import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLatestBookingsComponent } from './components/home-latest-bookings/home-latest-bookings.component';
import { BookingsViewerColumnComponent } from './components/bookings/bookings-viewer-column/bookings-viewer-column.component';
import { BookingsViewerColumnBookingsComponent } from './components/bookings/bookings-viewer-column-bookings/bookings-viewer-column-bookings.component';
import { BookingsViewerColumnCountriesComponent } from './components/bookings/bookings-viewer-column-countries/bookings-viewer-column-countries.component';
import { BookingsViewerColumnCitiesComponent } from './components/bookings/bookings-viewer-column-cities/bookings-viewer-column-cities.component';
import { BookingsViewerColumnHotelsComponent } from './components/bookings/bookings-viewer-column-hotels/bookings-viewer-column-hotels.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingsViewerColumnRoomsComponent } from './components/bookings/bookings-viewer-column-rooms/bookings-viewer-column-rooms.component';
import { StyleTestComponent } from './components/style-test/style-test.component';
import { TopbarComponent } from './components/navigation/topbar/topbar.component';
import { DatebarComponent } from './components/navigation/topbar/datebar/datebar.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { BookingsCreateColumnComponent } from './components/bookings/edit/bookings-create-column/bookings-create-column.component';
import { BookingCreateComponent } from './components/bookings/edit/booking-create/booking-create.component';
import { BookingEditComponent } from './components/bookings/edit/booking-edit/booking-edit.component';
import { BookingDeleteComponent } from './components/bookings/edit/booking-delete/booking-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLatestBookingsComponent,
    BookingsViewerColumnComponent,
    BookingsViewerColumnBookingsComponent,
    BookingsViewerColumnCountriesComponent,
    BookingsViewerColumnCitiesComponent,
    BookingsViewerColumnHotelsComponent,
    NavbarComponent,
    HomeComponent,
    BookingsViewerColumnRoomsComponent,
    StyleTestComponent,
    TopbarComponent,
    DatebarComponent,
    BookingsComponent,
    BookingsCreateColumnComponent,
    BookingCreateComponent,
    BookingEditComponent,
    BookingDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
