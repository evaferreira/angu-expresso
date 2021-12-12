import { Component, OnInit } from '@angular/core';
// Importamos el servicio
import { CatNinjaService } from '../../cat-ninja.service';
import { LibreriaService } from 'src/app/libreria.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(
    private catNinjaService: CatNinjaService,
    private libreriaService: LibreriaService
  ) { }

  data: any;
  libros: any;

  mostrarFact () {
    this.catNinjaService.getKittens().subscribe(data => {
      console.log(data);
      this.data = data;
    });
    this.libreriaService.getBooks().subscribe((libros: any) => {
      console.log(libros);
      this.libros = libros;
    });
  }

  // onInit: Cuando terminó de pre-cargar el componente
  ngOnInit(): void {
    // this.mostrarFact();
  }

}
