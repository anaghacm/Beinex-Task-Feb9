import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public firstName:String='Anagha';
  public lastName:string='Prajeesh';
  public jobTitle:string='Front End Development Trainee';

  constructor( public router:Router) { }

  ngOnInit(): void {
  }
  viewEducation(){
    this.router.navigateByUrl('/education');
  }
  viewReview(){
    this.router.navigateByUrl('');
  }
  viewHobbies(){
    this.router.navigateByUrl('/hobbies');
  }
}
