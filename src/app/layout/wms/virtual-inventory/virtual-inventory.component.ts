//import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { VirtualInventoryService } from './virtual-inventory.service';

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-virtual-inventory',
  templateUrl: './virtual-inventory.component.html',
  styleUrls: ['./virtual-inventory.component.scss']
})
export class VirtualInventoryComponent implements OnInit {

  private page: number = 0;
  private inentoryIan: Array<any>;
  pages: Array<number>;
  //sorting
  key: string = 'skuCode';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;

 /* email: string;
  password: string; */
  constructor(private _inventoryService: VirtualInventoryService, private _router: Router) { 
    
  }

  //@ViewChild('popup5') popup1: Popup;
 
  setPage(i, $event:any) {
  event.preventDefault();
  this.page=i;
  this.getListOfIan();

  }
  ngOnInit() {
    this.getListOfIan();

  }
  getListOfIan() {
    this._inventoryService.getListOfIan(this.page).subscribe(
      data => {
        console.log(data);
        this.inentoryIan = data['content'];
        this.pages = new Array(data['totalPages']);

        
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }
}
