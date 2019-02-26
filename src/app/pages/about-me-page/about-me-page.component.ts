import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.css']
})
export class AboutMePageComponent implements OnInit {

  public picture = "../../../assets/images/vladimir-grujin2.png";
  public isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  public moreAboutMe() {
    console.log('USAO')
    this.isOpen =! this.isOpen;
    console.log(this.isOpen)
  }
}
