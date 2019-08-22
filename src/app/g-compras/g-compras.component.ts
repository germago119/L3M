import {Component, OnInit} from '@angular/core';
import {Compra} from '../Models/compra';
import {DataService} from '../data.service';

@Component({
  selector: 'app-g-compras',
  templateUrl: './g-compras.component.html',
  styleUrls: ['./g-compras.component.css']
})
export class GComprasComponent implements OnInit {

  compraModel = new Compra('', null, null, '', '', '');
  submitted = false;


  editField: string;
  comprasList: Array<Compra> = [];

  constructor(private dataService: DataService) {
    this.dataService.getDataCompras().subscribe(data => {
      this.comprasList = data;
    });
  }

  onSubmit(descrip: string, fechaReal: Date, fechaReg: Date, prov: string, foto: string, suc: string) {
    this.dataService.postCompras(descrip, fechaReal, fechaReg, prov, foto, suc);
  }

  updateList(id: number, property: string, event: any) {
    this.comprasList[id][property] = event.target.textContent;
  }

  remove(id: any, fotoCompra: string) {
    this.comprasList.splice(id, 1);
    this.dataService.deleteDataCompras(fotoCompra);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  update(descripcionCompra: string,
    fechaRealCompra: Date,
    fechaRegistroCompra: Date,
    proveedorCompra: string,
    fotoCompra: string,
    sucursalRegistraCompra: string){
    this.dataService.putDataCompras(descripcionCompra,fechaRealCompra,fechaRegistroCompra,proveedorCompra,
      fotoCompra,sucursalRegistraCompra);

  }

  ngOnInit() {
  }

}
