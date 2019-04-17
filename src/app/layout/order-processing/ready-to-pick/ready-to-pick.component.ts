import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReadyToPackComponent } from '../ready-to-pack/ready-to-pack.component';
import { OrderProcessingService } from '../order-processing.service';

@Component({
  selector: 'app-ready-to-pick',
  templateUrl: './ready-to-pick.component.html',
  styleUrls: ['./ready-to-pick.component.scss']
})
export class ReadyToPickComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private service: OrderProcessingService){}
  
  openForm(){
      // this.service.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      // dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.width = '70%';
      dialogConfig.height = 'auto';
      this.dialog.open(ReadyToPackComponent,{ panelClass: 'custom-dialog-container' , disableClose :true });
  
  }
  ngOnInit() {

  }
  

}
