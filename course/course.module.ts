import { NgModule } from "@angular/core";
import { ExpandableComponent } from './expandable/expandable.component';
import { CourseComponent } from './course.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatDividerModule, MatListModule, MatIconModule, MatRadioModule, MatDatepickerModule, MatMenuModule, MatExpansionModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { courseRoutingModule } from './course-routing.module';
import { sharedModule } from '../common/components/shared.module';

@NgModule({
    declarations:[
         CourseComponent,
         ExpandableComponent
    ],
    imports:[
        courseRoutingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        sharedModule,
        MatRadioModule,
        MatDatepickerModule,
        MatMenuModule,
        MatExpansionModule,
        MatSelectModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        RouterModule,
        MatFormFieldModule,
        CommonModule,
        MatDividerModule,
        MatListModule,
        MatIconModule
    ]
})

export class courseModule{}