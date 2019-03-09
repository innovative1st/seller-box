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

  closeResult: string;

  constructor(private dialog: MatDialog,
    private service: OrderProcessingService) { }

  ngOnInit() {

  }

  // openLg(content) {
  //   this.modalService.open(content, { size: 'lg' });
  // }

  // openVerticallyCentered(content) {
  //   this.modalService.open(content, { centered: true });
  // }
  onCreate() {
    this.service.initializeFormGroup();
     const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.position;
     dialogConfig.width = '100%';
     this.dialog.open(ReadyToPackComponent, dialogConfig);
   }

}
