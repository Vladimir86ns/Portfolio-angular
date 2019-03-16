import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { ServerService } from './server.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HelloComponent } from './pages/home-page/components/hello/hello.component';
import { AboutMeComponent } from './pages/home-page/components/about-me/about-me.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ProgrammingPicturesComponentComponent } from './pages/about-me-page/components/programming-pictures-component/programming-pictures-component.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogPageComponentHeaderComponent } from './pages/blog-page/components/blog-page-component-header/blog-page-component-header.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { JavascriptComponent } from './pages/skills-page/javascript/javascript.component';
import { VariableAndStringComponent } from './pages/skills-page/javascript/components/javascript-basic/variable-and-string/variable-and-string.component';

import { ClipboardModule } from 'ngx-clipboard';

import { HighlightModule } from 'ngx-highlightjs';
import javascript from 'highlight.js/lib/languages/javascript';
import { AboutJavascriptComponent } from './pages/skills-page/javascript/components/about-javascript/about-javascript.component';
import { NumbersComponent } from './pages/skills-page/javascript/components/javascript-basic/numbers/numbers.component';
/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function highlightLanguages() {
  return [
    {name: 'javascript', func: javascript},
  ];
}


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    HelloComponent,
    AboutMeComponent,
    AboutMePageComponent,
    ProgrammingPicturesComponentComponent,
    ProjectsPageComponent,
    BlogPageComponent,
    BlogPageComponentHeaderComponent,
    ContactUsPageComponent,
    NotFoundPageComponent,
    JavascriptComponent,
    VariableAndStringComponent,
    AboutJavascriptComponent,
    NumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NguCarouselModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
    HighlightModule.forRoot({
      languages: highlightLanguages
    })
  ],
  providers: [
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
