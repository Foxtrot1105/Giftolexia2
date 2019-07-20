import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // onSubmit(form: NgForm) {
  //   const value = form.value;

  //   const user: any = {
  //     username: value.userName,
  //     password: value.passWord
  //   };

  //   console.log('form', form);
  //   this.router.navigate(['home']);
  // }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    // if (this.form.valid) {
    //   this.authService.login(this.form.value);
    // }
    // this.formSubmitAttempt = true;
    this.router.navigate(['home']);
  }
}
