import { Component, OnInit } from '@angular/core';
import { OrderProcessingService } from '../order-processing.service';
import { MatDialogRef } from '@angular/material';
import { OrderProcessingComponent } from '../order-processing.component';
import { FormGroup, FormBuilder } from '@angular/forms';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ready-to-pack',
  templateUrl: './ready-to-pack.component.html',
  styleUrls: ['./ready-to-pack.component.scss']
})
export class ReadyToPackComponent implements OnInit {
  options: FormGroup;
  constructor(private dialogRef: MatDialogRef<ReadyToPackComponent>,fb: FormBuilder) {
    this.options = fb.group({
     // hideRequired: false,
      floatLabel: 'auto',
    }); }
  ngOnInit() {
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  onClear() {
    
  }

  resetForm() {
    
  }

  onSubmit() {
    
  }

  onClose() {
    this.dialogRef.close();
  }


}
