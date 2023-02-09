import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public name:string ='Anagha Prajeesh';
  public job:string='Front End Web Development Trainee';
  public nation:string ='Kerala';
  public city:string='Calicut';
  public age:number=31;
  public dividerClass:string='address-divider';

  constructor() { }

  ngOnInit(): void {
  }

}
