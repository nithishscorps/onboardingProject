import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { fadeInItems } from '@angular/material';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { UploadFilesService } from '../../../upload/service/upload-files.service';


@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {
  
  sb:boolean;
  constructor(private data:DataStorageService,private uploadService:UploadFilesService,private router:Router) { }
 spin:boolean;
  ngOnInit() {
    console.log("bottom");
    this.sb=false;
    this.data.componentEmitter.subscribe(comp => {
     comp === "form" ? this.sb=true:this.sb=false;
   });

   this.data.spinner.subscribe(val =>{
     val === "on" ? this.spin=true:this.spin=false;
   });
   
  }
  
  next(){
    if(this.uploadService.items[this.uploadService.items.length-2].length > 0){
       this.router.navigate(['/formPage']);
    }
    else {
      this.data.requiredEmitter.next(true);
    }
  }

  verify(){
    this.data.verifyOnEmitter.next(true);
    this.data.submitForm();
  }
}





