import { JavascriptComponent } from './pages/skills-page/javascript/javascript.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailComponent } from './pages/projects-page/project-detail/project-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-me-page', component: AboutMePageComponent },
  { path: 'projects-page', component: ProjectsPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'contact-us', component: ContactUsPageComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'project/detail', component: ProjectDetailComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
