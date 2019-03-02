import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html'
})
export class AboutMePageComponent implements OnInit {

  public picture = "../../../assets/images/vladimir-grujin2.png";
  public isOpen = false;
  public helloWorld = "<p>Hello World</p>";
  public years = new Date().getFullYear() - 1986;

  constructor() { }

  ngOnInit() {
  }

  public moreAboutMe() {
    this.isOpen =! this.isOpen;
  }
}
