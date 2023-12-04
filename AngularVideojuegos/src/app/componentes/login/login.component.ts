import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listaUsuarios : Usuario[] = []
  usuario : Usuario | null = null//permitimos al heroe apuntar null mediante el tipo unión "|"
  
  
  //Datos que recogeremos del formulario
  
  nombre : string = ""
  contrasena : string = ""
  mensajeInicioSesionOculto : boolean = true
  contadorUsuarioIncorrecto : number = 0
  
  
  // Cuando se ejecuta el constructor por defecto, se añaden usuarios a la lista
  constructor(private router:Router,) {


    let usuario1 : Usuario = new Usuario("juan", "juan")
    this.listaUsuarios.push(usuario1);
    let usuario2 : Usuario = new Usuario("vanesa", "vanesa")
    this.listaUsuarios.push(usuario2);
    let usuario3 : Usuario = new Usuario("estefania", "estefania")
    this.listaUsuarios.push(usuario3);
    
  }

  //Para hacer routing programático debemos de usar el objeto "router"
  //Muy util cuando queremos mete logica de navegación o el componente
  //donde queremos ir depende de otros parámetros

  /**
   * Este método se encarga de comparar los datos recogidos por parámetro
   * con los datos almacenados en los objetos de tipo "Usuario" de una lista. 
   * Si coinciden, la página nos redirige a otro componente, pero si no coinciden, 
   * la página redirige a si misma.
   * 
   * Si los datos coinciden, se guarda en localStorage el nombre del usuario, para de esta forma 
   * poder mostrarlo posteriormente en las diferentes páginas.
   * 
   * Para optimizarlo, la página sólo redirige una única vez y después de que
   * están comprobados todos los datos de la lista.
   * 
   */

  public routingAcceder(){    
    
      for(let a=0; a<this.listaUsuarios.length; a++){
        let usuarioAux : Usuario = this.listaUsuarios[a]
        if(usuarioAux.nombre == this.nombre && usuarioAux.nombre == this.contrasena ){
          this.mensajeInicioSesionOculto = true
          localStorage.setItem('nombreUsuario', this.nombre);
          this.router.navigate([ '/listaVideojuegos']) // , this.nombre
          
          break
          }
        else {
          
          this.contadorUsuarioIncorrecto++
          }
      }
      if (this.contadorUsuarioIncorrecto == this.listaUsuarios.length) {
        this.mensajeInicioSesionOculto = false
        this.router.navigate([ '/'])
      }
    }
          

          
  
  
  
  
  
  
  
  
  
  
  ngOnInit(): void {
  }

}
