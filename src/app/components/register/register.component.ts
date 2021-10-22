import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**import { join } from 'path';
*/
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm!: FormGroup;
  submitted=false;
  show = false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]],
    });
  }
  /**we are getting the regForm data inside this formData function */
  get formData(){
    return this.regForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.regForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! \n\n' + JSON.stringify(this.regForm.value, null, 4));
  }
  
  passwordInput ="";

  OnCheck() {
  
  }
}
