import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http:HttpClient) { }

  storeFormData(val) {     
    this.http
      .put(
        'https://datastoring-5e6cd.firebaseio.com/forms.json',
        val
      )
      .subscribe(response => {
       // console.log(response + "1");
           //output:   {
           //             aircraft_type: "fixed_wing"
           //             batch: [{…}]
           //             course_details: "jiii"
           //             course_name: "jhh"
           //          }
      });
  }

  geFormData(){
   return this.http.get('https://datastoring-5e6cd.firebaseio.com/forms.json');
  }



  
}
