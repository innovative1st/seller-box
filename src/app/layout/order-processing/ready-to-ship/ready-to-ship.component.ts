import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderProcessingService } from '../order-processing.service';
import { ApiService } from 'src/app/api.service';
import { ReadyToShip } from '../../Model/ready-to-ship';

@Component({
  selector: 'app-ready-to-ship',
  templateUrl: './ready-to-ship.component.html',
  styleUrls: ['./ready-to-ship.component.scss']
})
export class ReadyToShipComponent implements OnInit {

  readyToShip: ReadyToShip[] = [];
  private auth_token: string;
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {

    if (this._apiService.isAuthenticated) {
      this.auth_token = this._apiService.getToken();
      this._apiService.getReadyToShip(this.auth_token).subscribe(
          res => {
           this.readyToShip = res.oblist;
          }
      );
  }

  }


}
