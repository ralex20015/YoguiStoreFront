import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulos-vista',
  templateUrl: './articulos-vista.component.html',
  styleUrls: ['./articulos-vista.component.css']
})
export class ArticulosVistaComponent implements OnInit {

  id: string;
  constructor(private articuloService: ArticulosService, private fb: FormBuilder, private router: Router, private activedRoute: ActivatedRoute) {

  }

  resp;
  expression: boolean = false;
  ngOnInit(): void {

    this.id = this.router.url.slice(10);
    this.articuloService.getArticulo(this.id).subscribe((res: any) => {
      this.resp = res;
      console.log(this.resp);
      this.expression = true;
    })
  }




}
