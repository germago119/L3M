import {Component, OnInit} from '@angular/core';
import {Producto} from '../Models/producto';
import {DataService} from '../data.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productoModel = new Producto(null, '', '', '', null, '', '', '');
  submitted = false;

  editField: string;
  productosList: Array<Producto> = [];

  constructor(private dataService: DataService) {
    this.dataService.getDataProductos().subscribe(data => {
      this.productosList = data;
    });
  }

  onSubmit(barra: number, nombre: string, descrip: string, prove: string, precio: number, imp: string, desc: string, suc: string) {
    this.dataService.postProducto(barra, nombre, descrip, prove, precio, imp, desc, suc);
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.productosList[id][property] = editField;
  }

  remove(id: any, codigoBarraProducto: number) {
    this.productosList.splice(id, 1);
    this.dataService.deleteDataProductos(codigoBarraProducto);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
  }

}
