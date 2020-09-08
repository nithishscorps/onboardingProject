import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload.component';
import { MainUploadComponent } from './main-upload/main-upload.component';
import { BottomComponent } from '../common/components/bottom/bottom.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '' , component : UploadComponent, children:[
      { path: '' , component : MainUploadComponent, outlet: 'uploads'},
      { path: '' , component: BottomComponent, outlet: 'bottom'}
    ]}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class uploadRoutingModule { }
  