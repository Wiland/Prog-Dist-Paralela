import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  user:any = {
    username: "",
    password: "",
    verificationPassword: ""
  };
  errorMsg:string = "";
  successMsg:string = "";

  constructor( private _userService:UserService, private _router:Router ) { }

  ngOnInit() {
  }

  crearUsuario(){
    if (this.user.password == this.user.verificationPassword) {
      this._userService.createUser(this.user).subscribe(
        data => {
          this.successMsg = "Usuario creado correctamente. La página se redigirá al inicio de sesión";
          this.errorMsg = "";
          setTimeout(() => this._router.navigate(['/login']), 3000);
        },
        error => {
          this.successMsg = "";
          this.errorMsg = error.json().message;
        });
    } else {
      this.successMsg = "";
      this.errorMsg = "Las contraseñas no coinciden, por favor verifíquelas";
    }
  }

}
