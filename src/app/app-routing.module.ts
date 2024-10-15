import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/lessons', pathMatch: 'full' },
  { path: 'lessons', component: LessonListComponent },
  { path: 'lessons/:id', component: LessonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }