import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-g-roles',
  templateUrl: './g-roles.component.html',
  styleUrls: ['./g-roles.component.css']
})
export class GRolesComponent implements OnInit {

  roles = [];
  editField: string;
  rolesList: Array<any> = [
    { id: 1, nombre: 'Cajero', descripcion: 'Encargado de atender las cajas' },
    { id: 2, nombre: 'Cajero', descripcion: 'Encargado de atender las cajas' },
    { id: 3, nombre: 'Cajero', descripcion: 'Encargado de atender las cajas' },
    { id: 4, nombre: 'Cajero', descripcion: 'Encargado de atender las cajas' },
    { id: 5, nombre: 'Cajero', descripcion: 'Encargado de atender las cajas' },
   
  ];


  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.rolesList[id][property] = editField;
  }

  remove(id: any) {
    this.rolesList.splice(id, 1);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  constructor(private dataService: DataService) { 
    this.dataService.getData().subscribe(data => {
      this.roles = data;
    });
  }

  ngOnInit() {
  }

}
