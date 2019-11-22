import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentaUsuario } from '../models/cuentausuario';


@Injectable({
  providedIn: 'root'
})


export class LoginService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(usuario: CuentaUsuario) {
    return this.http.post(`${this.API_URI}/login`, usuario);
  }

}
