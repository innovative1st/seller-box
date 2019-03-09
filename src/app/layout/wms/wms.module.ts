import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualInventoryComponent } from './virtual-inventory/virtual-inventory.component';
import { BookStockComponent } from './inventory/book-stock/book-stock.component';
import { StatModule, PageHeaderModule } from 'src/app/shared';
import { WmsRoutingModule } from './wms-routing.module';
import { WmsComponent } from './wms.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    WmsComponent,
    VirtualInventoryComponent,
    BookStockComponent,
    InventoryComponent,
    DataTableComponent

  ],
  imports: [
    CommonModule,
    StatModule,
    WmsRoutingModule,
    FormsModule,
    PageHeaderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ]
})
export class WmsModule { }
