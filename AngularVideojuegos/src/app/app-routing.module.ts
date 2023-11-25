import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import  { ListaVideojuegosComponent }  from './lista-videojuegos/lista-videojuegos.component';
import { DetallesVideojuegoComponent } from './detalles-videojuego/detalles-videojuego.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
const routes: Routes = [

  {
    path : '', //En este caso decimos el componente que mostraremos por defecto
    component : LoginComponent
  },
  {
    path : 'listaVideojuegos', //cuando definimos el 'path' no puede empezar por '/'
    component : ListaVideojuegosComponent
  },
  {
    path : 'detallesVideojuego', //cuando definimos el 'path' no puede empezar por '/'
    component : DetallesVideojuegoComponent
  },
  {
    path : 'contacto', //cuando definimos el 'path' no puede empezar por '/'
    component : ContactoComponent
  },
  {
    path : 'sobreNosotros', //cuando definimos el 'path' no puede empezar por '/'
    component : SobreNosotrosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
