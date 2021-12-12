import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LibreriaService } from 'src/app/libreria.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  busquedaFrom = new FormGroup({
    query: new FormControl('')
  });

  libros: any;

  constructor(
    private libreriaService: LibreriaService
  ) { }

  onSubmit () {
    console.log('vas bien', this.busquedaFrom.value);
    let { query } = this.busquedaFrom.value
    this.libreriaService.findBooks(query).subscribe((libros: any) => {
      console.log('Resultados:', libros);
      this.libros = libros;
    });
  }

  ngOnInit(): void {
  }

}
