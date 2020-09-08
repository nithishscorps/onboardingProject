import { NgModule } from '@angular/core';
import { UploadComponent } from './upload.component';
import { MainUploadComponent } from './main-upload/main-upload.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatDividerModule, MatListModule, MatIconModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { uploadRoutingModule } from './upload-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { sharedModule } from '../common/components/shared.module';


@NgModule({
    declarations:[
        UploadComponent,
        MainUploadComponent
    ],
    imports:[
        uploadRoutingModule,
        RouterModule,
        sharedModule,
        FlexLayoutModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        CommonModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule
    ]
})
export class uploadModule {}