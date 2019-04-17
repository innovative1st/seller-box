import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { BookStockComponent } from './book-stock.component';


const wmsRoutes:  Routes = [
  {path :'/bookStock', component :BookStockComponent}
  // children: [
  //   {path: '', loadChildren: './layouts/wms/wms-routing.module#WmsRoutingModule'}
  // ]}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(wmsRoutes)
  ]
})
export class BookStockModule { }
