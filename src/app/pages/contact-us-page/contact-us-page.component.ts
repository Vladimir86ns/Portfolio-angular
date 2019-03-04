import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css'],
  animations: [SharedAnimations]
})
export class ContactUsPageComponent implements OnInit {
  isContactPage = true;
  private formValues = {
    'email': null,
    'name': null,
    'subject': null,
    'message': null,

  };
 staticAlertClosed : true;
  error = null;
  success: any = null;
  constructor() {}

  ngOnInit() {}

  submitForm(form: NgForm) {
    this.formValues.email = form.value.email;
    this.formValues.name = form.value.name;
    this.formValues.subject = form.value.subject;
    this.formValues.message = form.value.message;
    this.success=true;
  }
}
