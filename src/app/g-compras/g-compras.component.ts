import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-g-compras',
  templateUrl: './g-compras.component.html',
  styleUrls: ['./g-compras.component.css']
})
export class GComprasComponent implements OnInit {

  editField: string;
  comprasList: Array<any> = [
    {
      id: 1,
      descripcion: '20 unidadades',
      fechaRealCompra: '12/12/12',
      fechaRegistroCompra: '12/12/12',
      proveedor: 'Dos pinos',
      fotoCompra: 'asfasfa',
      sucursal: 'Alajuela'
    },
    {
      id: 2,
      descripcion: '20 unidadades',
      fechaRealCompra: '12/12/12',
      fechaRegistroCompra: '12/12/12',
      proveedor: 'Dos pinos',
      fotoCompra: 'asfasfa',
      sucursal: 'Alajuela'
    },
    {
      id: 3,
      descripcion: '20 unidadades',
      fechaRealCompra: '12/12/12',
      fechaRegistroCompra: '12/12/12',
      proveedor: 'Dos pinos',
      fotoCompra: 'asfasfa',
      sucursal: 'Alajuela'
    },
    {
      id: 4,
      descripcion: '20 unidadades',
      fechaRealCompra: '12/12/12',
      fechaRegistroCompra: '12/12/12',
      proveedor: 'Dos pinos',
      fotoCompra: 'asfasfa',
      sucursal: 'Alajuela'
    },
    {
      id: 5,
      descripcion: '20 unidadades',
      fechaRealCompra: '12/12/12',
      fechaRegistroCompra: '12/12/12',
      proveedor: 'Dos pinos',
      fotoCompra: 'asfasfa',
      sucursal: 'Alajuela'
    },
  ];

  constructor() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.comprasList[id][property] = editField;
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
