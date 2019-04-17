import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderProcessingComponent } from './order-processing.component';
import { Routes, RouterModule } from '@angular/router';
import { StatModule, PageHeaderModule } from 'src/app/shared';
import { ReadyToPickComponent } from './ready-to-pick/ready-to-pick.component';
import { OrderProcessingRoutingModule } from './order-processing-routing.module';
import { FormModule } from '../form/form.module';
import { ReadyToPackComponent } from './ready-to-pack/ready-to-pack.component';
import { OrderProcessingService } from './order-processing.service';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule, MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NewOrderComponent } from './new-order/new-order.component';
import { ReadyToShipComponent } from './ready-to-ship/ready-to-ship.component';


@NgModule({
  declarations: [
    OrderProcessingComponent,
    ReadyToPickComponent,
    ReadyToPackComponent,
    NewOrderComponent,
    ReadyToShipComponent
  ],
  imports: [
    CommonModule,
    StatModule,
    OrderProcessingRoutingModule,
    MaterialModule,
    FormsModule,
    PageHeaderModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    
  ],
  providers: [OrderProcessingService],
  entryComponents: [ReadyToPackComponent]
})
export class OrderProcessingModule { }
