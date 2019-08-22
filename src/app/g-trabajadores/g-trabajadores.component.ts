import {Component, OnInit} from '@angular/core';
import {Trabajador} from '../Models/trabajador';
import {DataService} from '../data.service';

@Component({
  selector: 'app-g-trabajadores',
  templateUrl: './g-trabajadores.component.html',
  styleUrls: ['./g-trabajadores.component.css']
})
export class GTrabajadoresComponent implements OnInit {

  trabajadorModel = new Trabajador(null, '', null, null, '', null);
  submitted = false;

  constructor(private dataService:DataService) {
    this.dataService.getDataTrabajadores().subscribe(data => {
      this.trabajadoresList = data;
    });
  }

  editField: string;
  trabajadoresList: Array<Trabajador> = [];

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
    this.trabajadoresList[id][property] = editField;
  }

  remove(id: any, cedulaTrabajador:number) {
    this.trabajadoresList.splice(id, 1);
    this.dataService.deleteDataTrabajadores(cedulaTrabajador);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
  }

}
