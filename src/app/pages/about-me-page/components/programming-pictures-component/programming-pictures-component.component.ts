import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming-pictures-component',
  templateUrl: './programming-pictures-component.component.html'
})
export class ProgrammingPicturesComponentComponent implements OnInit {

  javascriptPicturePath = '../../../../../assets/images/languages-frameworks/js-1.png';
  phpPicturePath = '../../../../../assets/images/languages-frameworks/php-1.png';
  htmlPicturePath = '../../../../../assets/images/languages-frameworks/html-1.png';
  cssPicturePath = '../../../../../assets/images/languages-frameworks/css-1.png';
  nodePicturePath = '../../../../../assets/images/languages-frameworks/nodejs-1.png';
  reactPicturePath = '../../../../../assets/images/languages-frameworks/react-1.png';
  vuePicturePath = '../../../../../assets/images/languages-frameworks/vue-1.png';
  angularPicturePath = '../../../../../assets/images/languages-frameworks/angular-1.png';
  laravelPicturePath = '../../../../../assets/images/languages-frameworks/laravel-1.png';
  lumenPicturePath = '../../../../../assets/images/languages-frameworks/lumen-1.png';
  mySqlPicturePath = '../../../../../assets/images/languages-frameworks/mysql-1.png';
  mongoPicturePath = '../../../../../assets/images/languages-frameworks/mongodb-1.png';

  javascriptYearExperience = new Date().getFullYear() - 2017;

  constructor() { }

  ngOnInit() {
  }

}
