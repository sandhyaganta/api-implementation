import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { AmazonComponent } from './amazon/amazon.component';

const routes: Routes = [
  {
    path: "flipkart",
    component: FlipkartComponent
  },
  {
    path: "amazon",
    component: AmazonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
