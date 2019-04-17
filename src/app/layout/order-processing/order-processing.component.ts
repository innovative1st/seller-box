import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OrderProcessingService } from './order-processing.service';
import { ReadyToPickComponent } from './ready-to-pick/ready-to-pick.component';
import { ReadyToPackComponent } from './ready-to-pack/ready-to-pack.component';

@Component({
  selector: 'app-order-processing',
  templateUrl: './order-processing.component.html',
  styleUrls: ['./order-processing.component.scss']
})
export class OrderProcessingComponent implements OnInit {

  constructor(private service: OrderProcessingService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }
  
}
