import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './display/education/education.component';
import { HobbiesComponent } from './display/hobbies/hobbies.component';
import { ReviewComponent } from './display/review/review.component';

const routes: Routes = [
  {
    path: '', component: ReviewComponent
  },
  {
    path: 'education', component: EducationComponent
  },
  {
    path: 'hobbies', component: HobbiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
