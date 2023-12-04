import { Component, OnInit } from '@angular/core';
import { /*ActivatedRoute,*/ Router } from '@angular/router';
import { Videojuego } from '../../entidades/videojuego';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})


export class ListaVideojuegosComponent implements OnInit {
  


  public listaVideojuegos : Videojuego[] = []
  videojuego : Videojuego | null = null//permitimos al heroe apuntar null mediante el tipo unión "|"

  nombre : string = ''

  //nombreAux : string = ''
  
  
  
  
  
  
  
  
  //route:ActivatedRoute, por si acaso
  constructor(private router:Router) {


    //recogemos 

    this.nombre = localStorage.getItem('nombreUsuario') || "";
    //this.nombre = route.snapshot.params["nombre"], por si acaso

    
    
     // Obtener el nombre de usuario almacenado en localStorage
    

    let videojuego1 : Videojuego = new Videojuego(1,"Clash Royale", "Supercell","png","8/10")
    this.listaVideojuegos.push(videojuego1);
    let videojuego2 : Videojuego = new Videojuego(2,"League of legends", "Riot Games","png","9/10")
    this.listaVideojuegos.push(videojuego2);
    let videojuego3 : Videojuego = new Videojuego(3,"Fortnait", "Epic Games","png","10/10")
    this.listaVideojuegos.push(videojuego3);
    


  } 

  /* Este método recibe el objeto videojuego que se muestra en esa fila y ejecuta la ruta que nos lleva al componente detalles-videojuego, y le pasa
  por parámetros de ruta el id del videojuego */

  public verDetalle(videojuego : Videojuego) : void{

    this.router.navigate([ '/detallesVideojuego', videojuego.id])

    
  }


  ngOnInit(): void {
  }

}
