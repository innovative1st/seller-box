import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { WmsComponent } from './wms.component';

const wmsRoutes:  Routes = [
  {path :'', component :WmsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(wmsRoutes)
  ]
})
export class WmsRoutingModule { }
