import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomervehicleComponent } from './customervehicle/customervehicle.component';

const routes: Routes = [
  {path: 'customervehicle', component: CustomervehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
