import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html'
})
export class ProjectsPageComponent implements OnInit {

  salariumPicturePath = '../../../assets/images/projects/salarium-1.png';
  merididanPicturePath = '../../../assets/images/projects/meridian-1.png';
  nextProjectsPicturePath = '../../../assets/images/projects/project-1.png';
  leadTrekker = '../../../assets/images/projects/LeadTrekker-1.png';

  constructor() { }

  ngOnInit() {
  }

  openDetail(project) {
    console.log(project)
  }

}
