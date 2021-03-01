import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomervehicleComponent } from './customervehicle/customervehicle.component';
import { ShowCustomervehicleComponent } from './customervehicle/show-customervehicle/show-customervehicle.component';
import { AddEditCustomerComponent } from './customervehicle/add-edit-customer/add-edit-customer.component';
import { AddEditVehicleComponent } from './customervehicle/add-edit-vehicle/add-edit-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomervehicleComponent,
    ShowCustomervehicleComponent,
    AddEditCustomerComponent,
    AddEditVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
