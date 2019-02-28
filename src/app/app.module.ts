import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HelloComponent } from './pages/home-page/components/hello/hello.component';
import { AboutMeComponent } from './pages/home-page/components/about-me/about-me.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ProgrammingPicturesComponentComponent } from './pages/about-me-page/components/programming-pictures-component/programming-pictures-component.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    HelloComponent,
    AboutMeComponent,
    AboutMePageComponent,
    ProgrammingPicturesComponentComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
