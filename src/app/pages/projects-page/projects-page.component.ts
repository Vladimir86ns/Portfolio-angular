import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html'
})
export class ProjectsPageComponent implements OnInit {

  salariumPicturePath = '../../../assets/images/salarium.png';
  merididanPicturePath = '../../../assets/images/meridian.png';
  constructor() { }

  ngOnInit() {
  }

}
