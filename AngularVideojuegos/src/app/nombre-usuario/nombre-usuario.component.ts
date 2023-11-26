import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre-usuario',
  templateUrl: './nombre-usuario.component.html',
  styleUrls: ['./nombre-usuario.component.css']
})
export class NombreUsuarioComponent implements OnInit {

  
  
  @Input() nombre : string;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
