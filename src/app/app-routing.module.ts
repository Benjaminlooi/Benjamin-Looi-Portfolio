import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ResumeComponent } from './views/resume/resume.component';

const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent,
    data: {
      animation: 'resume',
      title: 'Resume - Benjamin Looi'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      animation: 'projects',
      title: 'Projects - Benjamin Looi'
    }
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      animation: 'home',
      title: 'Benjamin Looi Portfolio'
    }
  },
  {
    path: '**', component: NotFoundComponent, data: {
      title: '404 - Benjamin Looi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
