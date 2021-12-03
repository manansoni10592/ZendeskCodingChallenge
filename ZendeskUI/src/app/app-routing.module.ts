import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestComponent } from './request/request.component';


const routes: Routes = [
  {
    path:"",
    component:RequestComponent
  },
  {
    path:"request",
    component:RequestComponent
  },
  {
    path:"requestDetails/:id",
    component:RequestDetailsComponent
  },
  {
    path:"**",
    component:RequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
