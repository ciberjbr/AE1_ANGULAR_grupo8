import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../../entidades/videojuego';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-videojuego',
  templateUrl: './detalles-videojuego.component.html',
  styleUrls: ['./detalles-videojuego.component.css']
})
export class DetallesVideojuegoComponent implements OnInit {

  
  videojuego : Videojuego | null = null
  

    id : number = 0
    titulo : string = ""
    compania : string = ""
    imagen : string = ""
    valoracionMedia : string = ""

  
    listaVideojuegos2 : Videojuego[] = []
  
    videojuegoElegido : Videojuego | null = null
  
  
  
  
  
  constructor(route : ActivatedRoute) {


    let videojuego1 : Videojuego = new Videojuego(1,"Clash Royale", "Supercell","png","8/10")
    this.listaVideojuegos2.push(videojuego1);
    let videojuego2 : Videojuego = new Videojuego(2,"League of legends", "Riot Games","png","9/10")
    this.listaVideojuegos2.push(videojuego2);
    let videojuego3 : Videojuego = new Videojuego(3,"Fortnait", "Epic Games","png","10/10")
    this.listaVideojuegos2.push(videojuego3);

    this.id =  parseFloat(route.snapshot.params["idVideojuego"])

    for(let a=0; a<this.listaVideojuegos2.length; a++){
      let videojuegoAux : Videojuego = this.listaVideojuegos2[a]
      if(videojuegoAux.id == this.id){
          this.id = this.listaVideojuegos2[a].id
         this.titulo = this.listaVideojuegos2[a].titulo
          this.compania = this.listaVideojuegos2[a].compañia
          this.imagen = this.listaVideojuegos2[a].imagen
          this.valoracionMedia = this.listaVideojuegos2[a].valoracionMedia
        break
      }
    }

    

   }

  ngOnInit(): void {
  }

}
