import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseComponent } from './course/course.component';
import { UploadComponent } from './upload/upload.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatMenuModule, MatNativeDateModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToolbarComponent } from './common/components/toolbar/toolbar.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Routes,RouterModule } from '@angular/router';
import { MainUploadComponent } from './upload/main-upload/main-upload.component';
import { BottomComponent } from './common/components/bottom/bottom.component';
import { ExpandableComponent } from './course/expandable/expandable.component';
import { DataStorageService } from './common/services/data-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ReviewComponent } from './review/review.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





const allRoutes: Routes = [
  { path: '' , redirectTo: '/mainLoad',pathMatch: 'full'},
  { path: 'mainLoad' , component : UploadComponent, children:[
    { path: '' , component : MainUploadComponent, outlet: 'uploads'},
    { path: '' , component: BottomComponent, outlet: 'buttons'},
    { path: '' , component: BottomComponent, outlet: 'bottom'}
  ]},
  { path: 'formPage' , component: CourseComponent, children: [
    { path: '', component: ExpandableComponent, outlet: 'expand' },
    { path: '', component: BottomComponent, outlet: 'buttons' },
    { path: '' , component: BottomComponent, outlet: 'bottom'}
  ]},
  { path: 'review' , component: ReviewComponent }
];





@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ToolbarComponent,
    CourseComponent,
    MainUploadComponent,
    BottomComponent,
    ExpandableComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
