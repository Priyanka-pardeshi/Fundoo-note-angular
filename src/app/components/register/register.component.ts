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
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.regForm=this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required,Validators.email],
      password:['',[Validators.required,Validators.minLength(3)]],
      confirmpassword:['',[Validators.required,Validators.minLength(3)]]
    });
  }
  /**we are getting the regForm data inside this formData function */
  get formData(){
    return this.regForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    /**if any of field is invalid will come to this part */
    if(this.regForm.invalid)
    {
      return
    }
    console.log(JSON.stringify(this.regForm.value))
  }
  passwordInput ="";

  OnCheck() {
    
  }
}
