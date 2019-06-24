import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent, data: { animation: 'resume' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'projects' } },
  { path: '', pathMatch: 'full', component: HomeComponent, data: { animation: 'home' } },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
