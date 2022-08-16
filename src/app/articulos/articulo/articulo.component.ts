import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  constructor(private articulos: ArticulosService) { }
  articulosArray: any = [];
  ngOnInit(): void {
    this.articulos.getArticulos().subscribe((res: any) => {
      this.articulosArray = res;
      console.log(this.articulosArray);
    });
  }

}
