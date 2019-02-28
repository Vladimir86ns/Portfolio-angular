import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {

  public picture = "../../../../../assets/images/vladimir-grujin.png";

  constructor() { }

  ngOnInit() {
  }

}
