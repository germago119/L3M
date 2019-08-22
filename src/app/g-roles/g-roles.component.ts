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


  /*constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.roles = data;
      console.log(data);
    });
  }*/

  editField: string;
  rolesList: Array<Rol> = [];


  constructor(private dataService: DataService){
    this.dataService.getDataRoles().subscribe(data => {
      this.rolesList = data;
    });
  }


  onSubmit(nR: string, dR: string) {
    console.log(nR);
    console.log(dR);

    this.dataService.postRol(nR, dR);
  }

  updateList(id: number, property: string, event: any) {
    this.rolesList[id][property] = event.target.textContent;
  }

  remove(id: any, nombreRol:string) {
    this.rolesList.splice(id, 1);
    this.dataService.deleteDataRoles(nombreRol);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
  }

}
