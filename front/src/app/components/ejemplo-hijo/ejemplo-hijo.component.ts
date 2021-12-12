import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejemplo-hijo',
  templateUrl: './ejemplo-hijo.component.html',
  styleUrls: ['./ejemplo-hijo.component.scss']
})
export class EjemploHijoComponent implements OnInit {

  constructor() { }

  // Recibir el mensaje del componente padre
  @Input() mensaje?: string;

  ngOnInit(): void {
  }

}
