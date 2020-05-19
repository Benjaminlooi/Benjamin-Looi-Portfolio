import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ResumeComponent } from './views/resume/resume.component';
import { CardComponent } from './views/card/card.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent, data: { animation: 'resume' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'projects' } },
  { path: 'card', component: CardComponent, data: { animation: 'card' } },
  { path: '', pathMatch: 'full', component: HomeComponent, data: { animation: 'home' } },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
