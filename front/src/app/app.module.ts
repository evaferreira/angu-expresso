import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Declaramos en el módulo que el proyecto va a necesitar HttpClient
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { EjemploPadreComponent } from './components/ejemplo-padre/ejemplo-padre.component';
import { EjemploHijoComponent } from './components/ejemplo-hijo/ejemplo-hijo.component';
import { CardComponent } from './components/card/card.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EjemploPadreComponent,
    EjemploHijoComponent,
    CardComponent,
    CardWrapperComponent,
    NosotrosComponent,
    InicioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
