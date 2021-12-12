import { Component, OnInit } from '@angular/core';
// Importamos el servicio
import { CatNinjaService } from '../../cat-ninja.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(
    private catNinjaService: CatNinjaService
  ) { }

  data: any;

  mostrarFact () {
    this.catNinjaService.getKittens().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  // onInit: Cuando terminó de pre-cargar el componente
  ngOnInit(): void {
    // this.mostrarFact();
  }

}
