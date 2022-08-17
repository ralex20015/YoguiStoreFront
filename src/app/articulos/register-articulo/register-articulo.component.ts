import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-articulo',
  templateUrl: './register-articulo.component.html',
  styleUrls: ['./register-articulo.component.css']
})
export class RegisterArticuloComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      correo: ['', [Validators.required]],
      contrasena: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {

  }

}
