import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderProcessingComponent } from './order-processing.component';
import { Routes, RouterModule } from '@angular/router';
import { StatModule } from 'src/app/shared';
import { ReadyToPickComponent } from './ready-to-pick/ready-to-pick.component';
import { OrderProcessingRoutingModule } from './order-processing-routing.module';
import { FormModule } from '../form/form.module';
import { ReadyToPackComponent } from './ready-to-pack/ready-to-pack.component';
import { OrderProcessingService } from './order-processing.service';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    OrderProcessingComponent,
    ReadyToPickComponent,
    ReadyToPackComponent
  ],
  imports: [
    CommonModule,
    StatModule,
    OrderProcessingRoutingModule,
    MaterialModule
  ],
  providers: [OrderProcessingService],
  entryComponents: [ReadyToPackComponent]
})
export class OrderProcessingModule { }
