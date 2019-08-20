import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-g-trabajadores',
  templateUrl: './g-trabajadores.component.html',
  styleUrls: ['./g-trabajadores.component.css']
})
export class GTrabajadoresComponent implements OnInit {

  editField: string;
  trabajadoresList: Array<any> = [
    {
      id: 1,
      cedula: 12412412,
      nombreCompleto: 'Jose Alfaro',
      fechaNacimiento: '12/02/1980',
      fechaIngreso: '12/02/2019',
      sucursal: 'Alajuela',
      salarioPorHora: 1500
    },
    {
      id: 2,
      cedula: 12412412,
      nombreCompleto: 'Jose Alfaro',
      fechaNacimiento: '12/02/1980',
      fechaIngreso: '12/02/2019',
      sucursal: 'Alajuela',
      salarioPorHora: 1500
    },
    {
      id: 3,
      cedula: 12412412,
      nombreCompleto: 'Jose Alfaro',
      fechaNacimiento: '12/02/1980',
      fechaIngreso: '12/02/2019',
      sucursal: 'Alajuela',
      salarioPorHora: 1500
    },
    {
      id: 4,
      cedula: 12412412,
      nombreCompleto: 'Jose Alfaro',
      fechaNacimiento: '12/02/1980',
      fechaIngreso: '12/02/2019',
      sucursal: 'Alajuela',
      salarioPorHora: 1500
    },
    {
      id: 5,
      cedula: 12412412,
      nombreCompleto: 'Jose Alfaro',
      fechaNacimiento: '12/02/1980',
      fechaIngreso: '12/02/2019',
      sucursal: 'Alajuela',
      salarioPorHora: 1500
    },
  ];

  constructor() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.trabajadoresList[id][property] = editField;
  }

  remove(id: any) {
    this.trabajadoresList.splice(id, 1);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
  }

}
