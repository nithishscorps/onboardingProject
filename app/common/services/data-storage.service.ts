import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { ApiCallsService } from './api-calls.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  cities:string[] = ["bangalore","chennai","hyderabad","mumbai","delhi"];
  languages:string[]=["hindi","english","telugu"];
  expansionForm: FormGroup;
  expansionFormArr: FormGroup[]=[];
  detailsForm:FormGroup;
  expValid:boolean=true;
  reviewData =[];
  requiredEmitter = new Subject<boolean>();
  verifyOnEmitter = new Subject<boolean>();
  verifyOffEmitter = new Subject<boolean>();
  componentEmitter = new BehaviorSubject("");
  spinner = new BehaviorSubject("");



  constructor(private route:Router,private apis:ApiCallsService) { 
    this.route.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        if(e.url === "/mainLoad" || e.url === "/")this.componentEmitter.next("upload");
        else if(e.url === "/formPage")this.componentEmitter.next("form");
        else this.componentEmitter.next("review");
      }
    });
    this.expansionForm = new FormGroup({
      sDate: new FormControl(null,Validators.required),
      eDate: new FormControl(null,Validators.required),
      city: new FormControl(null,Validators.required),
      lng: new FormControl(null,Validators.required),
      cost: new FormControl(null,Validators.required),
      weekend: new FormControl(null,Validators.required)
   });
    this.expansionFormArr.push(this.expansionForm);
    this.detailsForm = new FormGroup({
      course_name: new FormControl(null,Validators.required),
      aircraft_type: new FormControl(null,Validators.required),
      course_details: new FormControl(null,Validators.required)
   });
  
  }

  add_batch(){
    this.expansionFormArr.push(new FormGroup({
      sDate: new FormControl(null,Validators.required),
      eDate: new FormControl(null,Validators.required),
      city: new FormControl(null,Validators.required),
      lng: new FormControl(null,Validators.required),
      cost: new FormControl(null,Validators.required),
      weekend: new FormControl(null,Validators.required)
    }));     
  }
  
  reset(i){
    this.expansionFormArr[i].reset({});
  }
  
  delete(i){
    if(this.expansionFormArr.length > 1)
    this.expansionFormArr.splice(i,1);
  }


  setData(data){
     this.reviewData = data;
     
  }

  validate(){
  return (this.expansionFormArr.every(form =>{
        if(form.status === "INVALID")
           return false;
           else return true;
      })) && this.detailsForm.status === "VALID";
     }


  submitForm(){
    if(this.validate()){
      var val=this.detailsForm.value;
      var exp=[];
      this.expansionFormArr.map(form =>{
         exp.push(form.value);
      });
      val["batch"]=exp;
      this.apis.storeFormData(val);
      this.apis.geFormData().subscribe(response => {
             this.setData(response);
             this.spinner.next("off");
             this.route.navigate(['/review']);
      });
      this.spinner.next("on");
      
    }  
  }
  

}
