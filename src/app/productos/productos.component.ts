import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  editField: string;
  productosList: Array<any> = [
    { id: 1, nombre: 'Trits', descripcion: 'helado', codigoBarras: 124125, proveedor: 'Dos pinos S.A', precio: 124124, impuesto: 124125, descuento: 0 },
    { id: 2, nombre: 'Trits', descripcion: 'helado', codigoBarras: 124125, proveedor: 'Dos pinos S.A', precio: 124124, impuesto: 124125, descuento: 0 },
    { id: 3, nombre: 'Trits', descripcion: 'helado', codigoBarras: 124125, proveedor: 'Dos pinos S.A', precio: 124124, impuesto: 124125, descuento: 0 },
    { id: 4, nombre: 'Trits', descripcion: 'helado', codigoBarras: 124125, proveedor: 'Dos pinos S.A', precio: 124124, impuesto: 124125, descuento: 0 },
    { id: 5, nombre: 'Trits', descripcion: 'helado', codigoBarras: 124125, proveedor: 'Dos pinos S.A', precio: 124124, impuesto: 124125, descuento: 0 },

  ];


  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.productosList[id][property] = editField;
  }

  remove(id: any) {
    this.productosList.splice(id, 1);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  constructor() { }

  ngOnInit() {
  }

}
