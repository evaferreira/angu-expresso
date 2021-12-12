import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gatitos';
  // Le envío esta data al HTML
  // Para mostrarla en el HTML uso {{ nombreDato }}
  edad = 45;
  numeros = [45, 456, 57, 7879, 8998, 9];
}
