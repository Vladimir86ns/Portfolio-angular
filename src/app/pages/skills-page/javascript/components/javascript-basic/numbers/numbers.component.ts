import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html'
})
export class NumbersComponent implements OnInit {

  code = 
  `
    // Create a number and assign to a variable
    let age = 26
    // Add
    let addResult = age + 1;   // 27
    // Subtract
    let subtractResult = age - 26.5;
    // Multiply
    let multiplyResult = age * 10;
    // Divide
    // -0.5 // 260
    let divideResult = age / 2;   // 13
    // Parenthesis can be used to make sure one operation happens before another letresult=(age+3)*7 //203
  `;
  

  constructor() { }

  ngOnInit() {
  }

}
