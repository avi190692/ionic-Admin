import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

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
     private authService: AuthService,
     private userService: UserService,
     private tokenService: TokenService,
     ) { 

  }

  ngOnInit() {
    this.login_form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }


  onSubmit(){
    this.authService.login(this.login_form.value.username, this.login_form.value.password)
    .subscribe(res => {
      this.tokenService.saveToken(res.token);
      this.userService.saveUserId(res.id);
      this.userService.getUserProfile().subscribe(user=>{console.log("user",user);});
      this.router.navigate(["dashboard"]);
    },
    err => {
      alert("Invalid Login details");
    });
  }
}
  

