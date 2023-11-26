import { Component, OnInit } from '@angular/core';
import { /*ActivatedRoute,*/ Router } from '@angular/router';
import { Videojuego } from '../entidades/videojuego';

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
  
  
  
  
  
  
  
  
  //route:ActivatedRoute,
  constructor(private router:Router) {


    

    this.nombre = localStorage.getItem('nombreUsuario') || "";
    //this.nombre = route.snapshot.params["nombre"]

    
    
     // Obtener el nombre de usuario almacenado en localStorage
    

    let videojuego1 : Videojuego = new Videojuego(1,"Clash Royale", "Supercell","png","8/10")
    this.listaVideojuegos.push(videojuego1);
    let videojuego2 : Videojuego = new Videojuego(2,"League of legends", "Riot Games","png","9/10")
    this.listaVideojuegos.push(videojuego2);
    let videojuego3 : Videojuego = new Videojuego(3,"Fortnait", "Epic Games","png","10/10")
    this.listaVideojuegos.push(videojuego3);
    


  } 


  public verDetalle(videojuego : Videojuego) : void{

    this.router.navigate([ '/detallesVideojuego', videojuego.id])

    
  }


  ngOnInit(): void {
  }

}
