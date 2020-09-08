import { NgModule } from "@angular/core";
import { BottomComponent } from './bottom/bottom.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations:[
      BottomComponent
    ],
    imports:[
       CommonModule,
       MatProgressSpinnerModule,
       MatButtonModule,
       FlexLayoutModule
    ],
    exports:[
        BottomComponent
    ]
})


export class sharedModule{}