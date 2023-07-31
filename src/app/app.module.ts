import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home` path when no path is specified
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    NgParticlesModule,
    RouterModule.forRoot(routes) // add routes to the app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

