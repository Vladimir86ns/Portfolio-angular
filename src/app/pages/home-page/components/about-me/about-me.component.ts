import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  public picture = "../../../../../assets/images/vladimir-grujin.png";

  skills = [
    {
      name: 'html',
      skillLevel: 55,
      missingSkills: 30
    },
    {
      name: 'css',
      skillLevel: 50,
      missingSkills: 35
    },
    {
      name: 'php',
      skillLevel: 70,
      missingSkills: 15
    },
    {
      name: 'javaScript',
      skillLevel: 60,
      missingSkills: 25
    },
    {
      name: 'mysql',
      skillLevel: 70,
      missingSkills: 15
    },
    {
      name: 'mongo db',
      skillLevel: 30,
      missingSkills: 55
    },
    {
      name: 'node js',
      skillLevel: 30,
      missingSkills: 55
    },
    {
      name: 'laravel',
      skillLevel: 70,
      missingSkills: 15
    },
    {
      name: 'lumen',
      skillLevel: 70,
      missingSkills: 15
    },
    {
      name: 'react',
      skillLevel: 70,
      missingSkills: 15
    },
    {
      name: 'angular',
      skillLevel: 50,
      missingSkills: 35
    },
    {
      name: 'vue',
      skillLevel: 55,
      missingSkills: 30
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
