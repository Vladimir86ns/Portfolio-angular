import { Component, OnInit } from '@angular/core';
import { SKILLS } from './mock-skills';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent implements OnInit {

  public picture = "../../../../../assets/images/vladimir-grujin.png";

  skills = SKILLS;

  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }

  ngOnInit() {
  }

}
