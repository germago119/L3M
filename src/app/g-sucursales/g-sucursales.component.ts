import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-g-sucursales',
  templateUrl: './g-sucursales.component.html',
  styleUrls: ['./g-sucursales.component.css']
})
export class GSucursalesComponent implements OnInit {

  editField: string;
  sucursalList: Array<any> = [
    {id: 1, nombre: 'Aurelia Vega', direccion: 'Madrid', telefono: 11283123, administrador: 'Jorge Salas'},
    {id: 2, nombre: 'Aurelia Vega', direccion: 'Madrid', telefono: 11283123, administrador: 'Jorge Salas'},
    {id: 3, nombre: 'Aurelia Vega', direccion: 'Madrid', telefono: 11283123, administrador: 'Jorge Salas'},
    {id: 4, nombre: 'Aurelia Vega', direccion: 'Madrid', telefono: 11283123, administrador: 'Jorge Salas'},
    {id: 5, nombre: 'Aurelia Vega', direccion: 'Madrid', telefono: 11283123, administrador: 'Jorge Salas'},

  ];

  constructor() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.sucursalList[id][property] = editField;
  }

  remove(id: any) {
    this.sucursalList.splice(id, 1);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
  }

}
