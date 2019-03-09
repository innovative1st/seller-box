import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

signupFormModalName = new FormControl('', Validators.required);
signupFormModalEmail = new FormControl('', Validators.email);
signupFormModalPassword = new FormControl('', Validators.required);

}
