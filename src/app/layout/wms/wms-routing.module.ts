import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { WmsComponent } from './wms.component';
import { BookStockComponent } from './inventory/book-stock/book-stock.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DataTableComponent } from './data-table/data-table.component';


const wmsRoutes: Routes = [
  {
    path: '',
    component: WmsComponent},
    {path: 'crises', component: InventoryComponent}

    // children: [
    //   {
    //     children: [
    //       { path: 'crises', component: InventoryComponent },
    //       { path: 'heroes', component: BookStockComponent },
    //       { path: '', component: DataTableComponent }
    //     ]
    //   }
    // ]

];

  // children: [
  //   {path: '', loadChildren: './layouts/wms/wms-routing.module#WmsRoutingModule'}
  // ]}



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(wmsRoutes)
  ]
})
export class WmsRoutingModule { }
