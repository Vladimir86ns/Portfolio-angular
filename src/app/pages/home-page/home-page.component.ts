import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  public picture = "../../../assets/images/vladimir-grujin.png";
  backgroundColor = "landing-gradient-quepal";
  showCustomizer = false;
  constructor() {}

  ngOnInit() {}

  changeBg(colorName) {
    this.backgroundColor = "landing-" + colorName;
  }
  toggleCustomizer() {
    this.showCustomizer = !this.showCustomizer;
  }
}
