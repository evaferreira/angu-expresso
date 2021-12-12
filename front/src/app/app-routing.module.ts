import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Crear una página de inicio y una de contacto

// Importamos el componente de /nosotros
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

// Acá declaramos las rutas
// Con '' declaramos qué queremos ver en la home
const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
