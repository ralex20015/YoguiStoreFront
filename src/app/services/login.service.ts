import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'https://yogui-commerce.onrender.com/usuario/login';
  url2: string = 'https://yogui-commerce.onrender.com/cliente';
  url3: string = 'https://yogui-commerce.onrender.com/usuario';
  numero = 0;
  constructor(private http: HttpClient) {

  }

  loginUsuario(usuario: any) {
    return this.http.post<any>(this.url, usuario);
  }
  register(usuario: any) {
    return this.http.post<any>(this.url2, usuario);
  }
  getUser(id) {
    return this.http.get(this.url3 + '/' + id);
  }
}
