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
      title: 'Resume - Benjamin Looi GHP'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      animation: 'projects',
      title: 'Projects - Benjamin Looi GHP'
    }
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      animation: 'home',
      title: 'Benjamin Looi Portfolio GHP'
    }
  },
  {
    path: '**', component: NotFoundComponent, data: {
      title: '404 - Benjamin Looi GHP'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
