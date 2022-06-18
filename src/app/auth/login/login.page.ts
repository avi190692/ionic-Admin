import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_form: FormGroup;

  constructor( 
     private formBuilder: FormBuilder,
     private router : Router,
     private authService: AuthService
     ) { 

  }

  ngOnInit() {
    this.login_form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }


  onSubmit(){
       console.log("---------", this.login_form.value);
       const returnValue = this.authService.login(this.login_form.value.username, 
             this.login_form.value.password)
       console.log("---------", returnValue);
             if (returnValue) {
                this.router.navigate(["dashboard"]);
             } else {
               alert("Please check username & password");
             }
  }
}
  
