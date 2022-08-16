import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  url = 'http://localhost:4000/articulos'
  constructor(private http: HttpClient) { }
  getArticulos() {
    return this.http.get(this.url);
  }
}
