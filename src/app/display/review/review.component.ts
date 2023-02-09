import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  public name!:string;
  public review!:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  resetInput(){
    alert('Thank you for your comment!')
    this.name='';
    this.review='';
  }

}
