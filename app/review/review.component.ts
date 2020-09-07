import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../common/services/data-storage.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private data:DataStorageService) { }
  reviewData;
  ngOnInit() {
    this.reviewData=this.data.reviewData;
    console.log("review");
  }

}
