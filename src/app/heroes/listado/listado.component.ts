import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

 heroes: string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor'];
 heroeBorrado: string  = "";

 borrarHeroe():void{
  console.log("Borrando..");
  //var i = this.heroes.indexOf( 'Hulk');
  //this.heroes.splice( i, 1 );
  this.heroeBorrado = this.heroes.shift() || '';
  console.log(this.heroeBorrado);
}
 
}
