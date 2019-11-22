import { Component, OnInit } from '@angular/core';
import { CuentaUsuario } from 'src/app/models/cuentausuario';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {


  ngOnInit() { }

  usuario: CuentaUsuario = {

    id_CuentaUsuario: 0,
    nombre: '',
    correo: '',
    pass: '',
    cui: 0,
    carnet: 0,
    idRol: 0,
  };

  constructor(private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute) { }

  logear() {
    this.loginService.login(this.usuario)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )

  }

}
