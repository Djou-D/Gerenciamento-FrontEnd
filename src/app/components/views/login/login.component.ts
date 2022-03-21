import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  senha: string = '';
  errorMessage = 'Credenciais invalidas';
  successMessage: string = '';

  loginInvalido = false;
  sucessoLogin = false;


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  // login() {
  //   this.loginService.executeAuthenticationService(this.email, this.senha)
  //     .subscribe(
  //       (data) => {
  //         console.log(data);

  //         this.sucessoLogin = true
  //         this.loginInvalido = false;

  //         this.successMessage = 'Logado com sucesso';
  //         this.router.navigate(['setores']);
  //       },
  //       error => {
  //         console.log(error);

  //         this.loginInvalido = true;
  //         this.sucessoLogin = false;

  //       }
  //     );


  // }


  login(){

    this.loginService.login(this.email, this.senha).subscribe((result) => {

      this.loginInvalido = false;
      this.sucessoLogin = true;

      this.successMessage = 'Logado com sucesso';
      this.router.navigate(['/home2']);

      console.log(result)
    }, () => {

      this.loginInvalido = true;
      this.sucessoLogin = false;
      this.router.navigate(['/home'])
    });
  }



}
