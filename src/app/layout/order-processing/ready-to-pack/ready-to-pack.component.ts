import { Component, OnInit } from '@angular/core';
import { OrderProcessingService } from '../order-processing.service';
import { MatDialogRef } from '@angular/material';
import { OrderProcessingComponent } from '../order-processing.component';


@Component({
  selector: 'app-ready-to-pack',
  templateUrl: './ready-to-pack.component.html',
  styleUrls: ['./ready-to-pack.component.scss']
})
export class ReadyToPackComponent implements OnInit {

  constructor(private service: OrderProcessingService,
    public dialogRef: MatDialogRef<OrderProcessingComponent>) { }
  ngOnInit() {
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
   // this.notificationService.success(':: Submitted successfully');
  }

  onReset() {
    this.service.form.reset();
  }

  // onSubmit() {
  //   if (this.service.form.valid) {
  //     if (!this.service.form.get('$key').value) {
  //       this.service.insertEmployee(this.service.form.value);
  //     } else {
  //       this.service.updateEmployee(this.service.form.value);
  //       this.service.form.reset();
  //       this.service.initializeFormGroup();
  //       this.notificationService.success(':: Submitted successfully');
  //       this.onClose();
  //     }
  //   }
  // }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
