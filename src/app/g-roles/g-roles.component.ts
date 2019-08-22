import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Rol} from '../Models/rol';
import {EnrollmentService} from '../enrollment.service';


@Component({
  selector: 'app-g-roles',
  templateUrl: './g-roles.component.html',
  styleUrls: ['./g-roles.component.css']
})
export class GRolesComponent implements OnInit {
  rolModel = new Rol('', '');
  submitted = false;
  errorMsg = ' ';

  // // @ts-ignore
  // constructor(private enrollmentService: EnrollmentService) {
  // }

  // @ts-ignore

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
