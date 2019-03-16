import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable-and-string',
  templateUrl: './variable-and-string.component.html'
})
export class VariableAndStringComponent implements OnInit {

  someCode = 
  `
    // Create a variable to store the city
    let city = 'Munich'

    // Create a variable to store the state
    let state = 'Germany'

    // Create a variable to combine the city and state
    let location = city + ', ' + state
    
    // Print the combined location to the terminal
    console.log(location)
  `;
  
  constructor() { }

  ngOnInit() {
  }

}
