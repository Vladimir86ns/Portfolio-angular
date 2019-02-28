import { Component, OnInit } from '@angular/core';
import { SKILLS } from './mock-skills';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent implements OnInit {

  public picture = "../../../../../assets/images/vladimir-grujin.png";

  skills = SKILLS;

  constructor() { }

  ngOnInit() {
  }

}
