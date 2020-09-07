import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, NavigationStart } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  load: number;

  constructor(private data:DataStorageService){ this.load=40;}

  ngOnInit() {
    console.log("top");
    this.data.componentEmitter.subscribe(comp => {
           if (comp === "upload")this.load=40;
           else if(comp === "form")this.load=80;
           else this.load=100;
           console.log(this.load);
    });
    
  }
}
