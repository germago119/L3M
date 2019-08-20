import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-g-proveedores',
  templateUrl: './g-proveedores.component.html',
  styleUrls: ['./g-proveedores.component.css']
})
export class GProveedoresComponent implements OnInit {

  editField: string;
  proveedoresList: Array<any> = [
    {id: 1, nombreCompleto: 'Dos pinos S.A', cedula: 12512512},
    {id: 2, nombreCompleto: 'Dos pinos S.A', cedula: 12512512},
    {id: 3, nombreCompleto: 'Dos pinos S.A', cedula: 12512512},
    {id: 4, nombreCompleto: 'Dos pinos S.A', cedula: 12512512},
    {id: 5, nombreCompleto: 'Dos pinos S.A', cedula: 12512512},

  ];

  constructor() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.proveedoresList[id][property] = editField;
  }

  remove(id: any) {
    this.proveedoresList.splice(id, 1);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
  }

}
