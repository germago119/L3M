import {Component, OnInit} from '@angular/core';
import {Compra} from '../Models/compra';
import {DataService} from '../data.service';

@Component({
  selector: 'app-g-compras',
  templateUrl: './g-compras.component.html',
  styleUrls: ['./g-compras.component.css']
})
export class GComprasComponent implements OnInit {

  editField: string;
  comprasList: Array<Compra> = [];

  constructor(private dataService:DataService) {
    this.dataService.getDataCompras().subscribe(data => {
      this.comprasList = data;
    });
  }

  updateList(id: number, property: string, event: any) {
    this.comprasList[id][property] = event.target.textContent;
  }

  remove(id: any) {
    this.comprasList.splice(id, 1);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
  }

}
