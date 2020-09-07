import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {


  items = [[],[],[]];

  constructor() { }


  deleteFile(i,j){
    this.items[i].splice(j,1);
  }
  upload(filename,i){
    this.items[i].push(filename);
  }
 
}
