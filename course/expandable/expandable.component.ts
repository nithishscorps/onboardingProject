import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataStorageService } from 'src/app/common/services/data-storage.service';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.css']
})
export class ExpandableComponent implements OnInit {

  
  cits = [];
  lngs =[];
  expandFormArr : FormGroup[] = [];
  expandForm: FormGroup;
  ccost: any;
  ccity: any;
  setColor: boolean;
  verify:boolean;
  //@ViewChild('poke',{static:true})poke:ElementRef;
 
  constructor(private data:DataStorageService) { }

  ngOnInit() {
    console.log("expand");
    this.verify=false;
    this.cits = this.data.cities;
    this.lngs = this.data.languages;
    this.expandForm = this.data.expansionForm;
    this.expandFormArr = this.data.expansionFormArr;
    console.log(this.expandFormArr);
    this.data.verifyOnEmitter.subscribe(req => {
        this.verify=true;
    });
    this.data.verifyOffEmitter.subscribe(req => {
      this.verify=false;
  });
  
  }

  
  delete(i){
    this.data.delete(i);
  }
  reset(i){
    this.data.reset(i);
  }

 

}
