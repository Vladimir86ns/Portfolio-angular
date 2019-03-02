import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {

  public picture = "../../../../../assets/images/vladimir-grujin.png";
  public picture2 = "../../../../../assets/images/vladimir-grujin2.png";

  constructor() { }

  ngOnInit() {
  }

}
