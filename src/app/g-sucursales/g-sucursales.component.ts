import {Component, OnInit} from '@angular/core';
import {Sucursal} from '../Models/sucursal';
import {DataService} from '../data.service';

@Component({
  selector: 'app-g-sucursales',
  templateUrl: './g-sucursales.component.html',
  styleUrls: ['./g-sucursales.component.css']
})
export class GSucursalesComponent implements OnInit {

  sucursalModel = new Sucursal('', '', null, '');
  submitted = false;
  errorMsg = ' ';

  editField: string;
  sucursalList: Array<any> = [
    {id: 1, nombre: 'Aurelia Vega', direccion: 'Madrid', telefono: 11283123, administrador: 'Jorge Salas'},
    {id: 2, nombre: 'Aurelia Vega', direccion: 'Madrid', telefono: 11283123, administrador: 'Jorge Salas'},
    {id: 3, nombre: 'Aurelia Vega', direccion: 'Madrid', telefono: 11283123, administrador: 'Jorge Salas'},
    {id: 4, nombre: 'Aurelia Vega', direccion: 'Madrid', telefono: 11283123, administrador: 'Jorge Salas'},
    {id: 5, nombre: 'Aurelia Vega', direccion: 'Madrid', telefono: 11283123, administrador: 'Jorge Salas'},

  ];

  constructor(private dataService: DataService) {
  }

  onSubmit(nS: string, dS: string, tS: number, aS: string) {
    this.dataService.postSucursales(nS, dS, tS, aS);
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
