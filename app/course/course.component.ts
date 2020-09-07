import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../common/services/data-storage.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  detailedForm : FormGroup;
  cname: boolean;
  ctype: boolean;
  verify:boolean;

  

  constructor(private data:DataStorageService) { }

  ngOnInit() {
    console.log("form page");
    this.detailedForm = this.data.detailsForm;
    this.data.verifyOnEmitter.subscribe((req) => {
      this.verify=true;
    });
     
  }



add_batch(){
  this.data.add_batch();
  this.data.verifyOffEmitter.next(false);
}


}
