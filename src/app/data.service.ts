import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rol} from './Models/rol';
import {Sucursal} from './Models/sucursal';
import {Trabajador} from './Models/trabajador';
import {Proveedor} from './Models/proveedor';
import {Producto} from './Models/producto';
import {Compra} from './Models/compra';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
     alert('Data service is working!');
  }

  getDataRoles() {
    return this.httpClient.get<Rol[]>("/api/Roles");
  }

  getDataSucursales(){
    return this.httpClient.get<Sucursal[]>("/api/Sucursales");
  }

  getDataTrabajadores(){
    return this.httpClient.get<Trabajador[]>("/api/Trabajadores");
  }

  getDataProveedores(){
    return this.httpClient.get<Proveedor[]>("/api/Proveedores");
  }

  getDataProductos(){
    return this.httpClient.get<Producto[]>("/api/Productos");
  }

  getDataCompras(){
    return this.httpClient.get<Compra[]>("/api/Compras");
  }

}
