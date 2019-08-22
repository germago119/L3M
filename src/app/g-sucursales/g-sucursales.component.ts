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
  sucursalList: Array<Sucursal> = [];

  constructor(private dataService:DataService) {
    this.dataService.getDataSucursales().subscribe(data =>{
      this.sucursalList = data;
    });
  }

  onSubmit() {
    this.submitted = true;
    // this.enrollmentService.enroll(this.rolModel)
    //   .subscribe(
    //     response => console.log('Success!', response),
    //     error => this.errorMsg = error.statusText
    //   );
    console.log('success');
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.sucursalList[id][property] = editField;
  }

  remove(id: any, nombreSucursal:string) {
    this.sucursalList.splice(id, 1);
    this.dataService.deleteDataSucursales(nombreSucursal);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
  }

}
