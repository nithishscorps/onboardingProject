import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataStorageService } from 'src/app/common/services/data-storage.service';
import { UploadFilesService } from '../service/upload-files.service';

@Component({
  selector: 'app-main-upload',
  templateUrl: './main-upload.component.html',
  styleUrls: ['./main-upload.component.css']
})
export class MainUploadComponent implements OnInit {


 
  formData: FormData = new FormData();
  itemsArr = [[],[],[]];
  compulsory:boolean;
  categories=["INSTITUTE BROUCHER","INSTITUTE GALLERY","CERTIFICATIONS"];
  fileName;

  constructor(private uploadService:UploadFilesService,private data:DataStorageService) { }

  ngOnInit() {
    console.log("main upload");
    this.itemsArr = this.uploadService.items;

    this.data.requiredEmitter.subscribe(comp =>{
      this.compulsory=comp;


    }); 
  }

onFile(files: FileList,i){
  
  //this.data.file.push(files.item(0));
  //this.files=event.target.files[0];
  
  //console.log(this.data.file);
  //  this.formData.append('file' + i, this.data.file[0], "");
    //this.formData.append('file' + i, files.item(0), "");
  
  //  console.log(this.formData.getAll('file0'));
  // this.formData.delete('file0');
   //console.log(this.formData.getAll('file0'));
  
  this.compulsory=false;
  this.uploadService.upload(files.item(0).name,i);
}

delete(i,j){
  this.uploadService.deleteFile(i,j);
  console.log(i);
  console.log(j);
  
}

}
