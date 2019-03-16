import { UtilsService } from './../../../services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {

  selected = 'about';
  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }

  getCurrentYearsOfExperience(year) {
    return this.utilsService.getCurrentYearsOfExperience(year);
  }

  displayCode(selected) {
    this.selected = selected;
  }
}
