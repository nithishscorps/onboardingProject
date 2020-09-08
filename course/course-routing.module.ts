import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { BottomComponent } from '../common/components/bottom/bottom.component';


const routes: Routes = [
    { path: '' , component: CourseComponent, children: [
        { path: '', component: ExpandableComponent, outlet: 'expand' },
        { path: '' , component: BottomComponent, outlet: 'bottom'}
      ]},
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class courseRoutingModule{}