import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  tarjetas = [
    {
      imagen: "assets/images/paris.jpg",
      categoria: "Vuelo",
      titulo: "Viajá a París",
      ofertaInfalible: false,
      precio: 654299,
    },
    {
      imagen: "assets/images/medellin.jpg",
      categoria: "Hotel",
      titulo: "Visita Medellín",
      ofertaInfalible: true,
      precio: 6542,
    },
    {
      imagen: "assets/images/playa.jpg",
      categoria: "Hotel",
      titulo: "Conoce la playa",
      ofertaInfalible: false,
      precio: 3682,
    },
    {
      imagen: "assets/images/colombia.jpg",
      categoria: "Paquete",
      titulo: "Visita Colombia",
      ofertaInfalible: false,
      precio: 823985,
    }
  ];

  // Preparo los datos a enviar
  // imagen = "assets/images/sami.jpg";
  // categoria = "Vuelo";
  // titulo = "Viajá a París";
  // ofertaInfalible = false;
  // precio = 654299;

  constructor() { }

  ngOnInit(): void {
  }

}
