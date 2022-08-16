import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:4000/usuario/login';
  numero = 0;
  constructor(private http: HttpClient) {

  }

  loginUsuario(usuario: any) {
    return this.http.post<any>(this.url, usuario);
  }
}
