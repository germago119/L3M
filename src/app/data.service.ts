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

  deleteDataRoles(idRol: string){
    console.log(idRol);
    this.httpClient.delete("/api/Roles/" + idRol)
    .subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
  }

  deleteDataSucursales(idSucursal: string){
    console.log(idSucursal);
    this.httpClient.delete("/api/Sucursales/" + idSucursal)
    .subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
  }

  deleteDataTrabajadores(idTrabajador: number){
    console.log(idTrabajador);
    this.httpClient.delete("/api/Trabajadores/" + idTrabajador.toString())
    .subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
  }

  deleteDataProveedores(idProveedor: string){
    console.log(idProveedor);
    this.httpClient.delete("/api/Proveedores/" + idProveedor)
    .subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
  }

  deleteDataProductos(idProducto: number){
    console.log(idProducto);
    this.httpClient.delete("/api/Productos/" + idProducto.toString())
    .subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
  }

  deleteDataCompras(idCompra: string){
    console.log(idCompra);
    this.httpClient.delete("/api/Compras/" + idCompra)
    .subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
  }

}
