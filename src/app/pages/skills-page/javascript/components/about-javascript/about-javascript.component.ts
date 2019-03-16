import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-javascript',
  templateUrl: './about-javascript.component.html'
})
export class AboutJavascriptComponent implements OnInit {

  imagePath = '../../../../../../assets/images/jsbin.png'
  
  constructor() { }

  ngOnInit() {
  }

}
