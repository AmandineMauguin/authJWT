import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm:FormGroup;

    constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      //Forcer la mise en forme et le mandatory
      email:['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  //On passe les valeurs du formulaire
  login(){
    this.authService.login(this.authForm.value).subscribe();
  };

  register(){
    this.authService.register(this.authForm.value).subscribe((result) => {
      this.login();
    });
  };

}
