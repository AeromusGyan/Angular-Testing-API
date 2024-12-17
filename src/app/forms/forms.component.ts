import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  registerForm!: FormGroup;
  submitted!:boolean;
  currentDate:any;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    
    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd','en');
    
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.emailValidator]],
      quantity:['', [Validators.required, Validators.min(1), Validators.max(3)]],
      contact: [null, [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      date: ['', [Validators.required]],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      })
    });
  }

    emailValidator(control: FormGroup){
      // let EMAIL_REGEXP = new RegExp('[a-zA-Z0-9_\-\.]+@infosys.com');
      // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.])+@infosys.com$/;
      // if (EMAIL_REGEXP.test(control.value)) {
        return EMAIL_REGEXP.test(control.value) ? null : {
          emailInvalid: {
            message: "Invalid Format!"
          }
        };
      // }
      // else{
      //   return null
      // }
      
  }
  contactValidator(control:FormGroup){
    if(control.value.length>10){
      return false;
    }
    else {
      return null;
    }
  }
  dateValidator(control:FormGroup){
    let currentDate = formatDate(new Date(), 'yyyy-MM-dd','en');
    console.log(currentDate, control.value);
    if(control.value ){

    }
  }
  submit(){
    console.log(this.registerForm);
    
  }
}
