import {Component, OnInit} from '@angular/core';
import {Proveedor} from '../Models/proveedor';
import {DataService} from '../data.service';

@Component({
  selector: 'app-g-proveedores',
  templateUrl: './g-proveedores.component.html',
  styleUrls: ['./g-proveedores.component.css']
})
export class GProveedoresComponent implements OnInit {

  proveedorModel = new Proveedor('', '');
  submitted = false;

  editField: string;
  proveedoresList: Array<Proveedor> = [];

  constructor(private dataService: DataService) {
    this.dataService.getDataProveedores().subscribe(data => {
      this.proveedoresList = data;
    });
  }

  onSubmit(cP: string, nP: string) {
    this.dataService.postProveedores(cP, nP);
  }


  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.proveedoresList[id][property] = editField;
  }

  remove(id: any, cedulaProveedor: string) {
    this.proveedoresList.splice(id, 1);
    this.dataService.deleteDataProveedores(cedulaProveedor);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
  }

}
