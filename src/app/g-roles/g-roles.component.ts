import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Rol} from '../Models/rol';


@Component({
  selector: 'app-g-roles',
  templateUrl: './g-roles.component.html',
  styleUrls: ['./g-roles.component.css']
})
export class GRolesComponent implements OnInit {
  rolModel = new Rol('', '');
  submitted = false;
  errorMsg = ' ';


  roles = [];

  /*constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.roles = data;
      console.log(data);
    });
  }*/

  constructor(private dataService: DataService) {
    //this.dataService.getData();
  }


  editField: string;
  rolesList: Array<any> = [
    {id: 1, nombre: 'Cajero', descripcion: 'Encargado de atender las cajas'},
    {id: 2, nombre: 'Cajero', descripcion: 'Encargado de atender las cajas'},
    {id: 3, nombre: 'Cajero', descripcion: 'Encargado de atender las cajas'},
    {id: 4, nombre: 'Cajero', descripcion: 'Encargado de atender las cajas'},
    {id: 5, nombre: 'Cajero', descripcion: 'Encargado de atender las cajas'},

  ];

  onSubmit(nR: string, dR: string) {
    console.log(nR);
    console.log(dR);

    this.dataService.postRol(nR, dR);
  }

  updateList(id: number, property: string, event: any) {
    this.rolesList[id][property] = event.target.textContent;
  }

  remove(id: any) {
    this.rolesList.splice(id, 1);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
  }

}
