import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-handover-report',
  templateUrl: './handover-report.component.html',
  styleUrls: ['./handover-report.component.scss']
})
export class HandoverReportComponent implements OnInit {
  options: FormGroup;
  constructor(private dialogRef: MatDialogRef<HandoverReportComponent>,fb: FormBuilder) {
    this.options = fb.group({
     // hideRequired: false,
      floatLabel: 'auto',
    }); }

  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close();
  }

}
