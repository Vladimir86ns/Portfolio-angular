import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming-pictures-component',
  templateUrl: './programming-pictures-component.component.html'
})
export class ProgrammingPicturesComponentComponent implements OnInit {

  javascriptPicturePath = '../../../../../assets/images/javascript.png';
  phpPicturePath = '../../../../../assets/images/php7.png';
  constructor() { }

  ngOnInit() {
  }

}
