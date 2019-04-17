import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { OrderProcessingComponent } from "./order-processing.component";
import { StatModule } from "src/app/shared";
import { ReadyToPackComponent } from "./ready-to-pack/ready-to-pack.component";
import { ReadyToPickComponent } from "./ready-to-pick/ready-to-pick.component";
import { NewOrderComponent } from "./new-order/new-order.component";
import { ReadyToShipComponent } from "./ready-to-ship/ready-to-ship.component";

const orderProcessing: Routes = [
  {
    path: '',
    component: OrderProcessingComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'readytoship', component: ReadyToShipComponent },
          { path: 'readytopack', component: ReadyToPackComponent },
          { path: 'readytopick', component: ReadyToPickComponent },
          { path: 'neworder', component: NewOrderComponent },
        ]
      }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, StatModule, RouterModule.forChild(orderProcessing)],
  exports: [RouterModule]
})
export class OrderProcessingRoutingModule {}
