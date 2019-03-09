import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderProcessingComponent } from './order-processing.component';
import { ReadyToPickComponent } from './ready-to-pick/ready-to-pick.component';

const orderProcessing:  Routes = [
  {path :'', component :OrderProcessingComponent}
]
@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forChild(orderProcessing)
  ],
  exports: [RouterModule]
})
export class OrderProcessingRoutingModule { }
