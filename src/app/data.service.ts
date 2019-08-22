import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
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
    console.log('Data service is working!');
  }

  getDataRoles() {
    return this.httpClient.get<Rol[]>('/api/Roles');
  }

  getDataSucursales() {
    return this.httpClient.get<Sucursal[]>('/api/Sucursales');
  }

  getDataTrabajadores() {
    return this.httpClient.get<Trabajador[]>('/api/Trabajadores');
  }

  getDataProveedores() {
    return this.httpClient.get<Proveedor[]>('/api/Proveedores');
  }

  getDataProductos() {
    return this.httpClient.get<Producto[]>('/api/Productos');
  }

  getDataCompras() {
    return this.httpClient.get<Compra[]>('/api/Compras');
  }

  deleteDataRoles(idRol: string) {
    console.log(idRol);
    this.httpClient.delete('/api/Roles/' + idRol)
    .subscribe(
        (val) => {
            console.log('DELETE call successful value returned in body',
                        val);
        },
        response => {
            console.log('DELETE call in error', response);
        },
        () => {
            console.log('The DELETE observable is now completed.');
        });
  }

  deleteDataSucursales(idSucursal: string) {
    console.log(idSucursal);
    this.httpClient.delete('/api/Sucursales/' + idSucursal)
    .subscribe(
        (val) => {
            console.log('DELETE call successful value returned in body',
                        val);
        },
        response => {
            console.log('DELETE call in error', response);
        },
        () => {
            console.log('The DELETE observable is now completed.');
        });
  }

  deleteDataTrabajadores(idTrabajador: number) {
    console.log(idTrabajador);
    this.httpClient.delete('/api/Trabajadores/' + idTrabajador.toString())
    .subscribe(
        (val) => {
            console.log('DELETE call successful value returned in body',
                        val);
        },
        response => {
            console.log('DELETE call in error', response);
        },
        () => {
            console.log('The DELETE observable is now completed.');
        });
  }

  deleteDataProveedores(idProveedor: string) {
    console.log(idProveedor);
    this.httpClient.delete('/api/Proveedores/' + idProveedor)
    .subscribe(
        (val) => {
            console.log('DELETE call successful value returned in body',
                        val);
        },
        response => {
            console.log('DELETE call in error', response);
        },
        () => {
            console.log('The DELETE observable is now completed.');
        });
  }

  deleteDataProductos(idProducto: number) {
    console.log(idProducto);
    this.httpClient.delete('/api/Productos/' + idProducto.toString())
    .subscribe(
        (val) => {
            console.log('DELETE call successful value returned in body',
                        val);
        },
        response => {
            console.log('DELETE call in error', response);
        },
        () => {
            console.log('The DELETE observable is now completed.');
        });
  }

  deleteDataCompras(idCompra: string) {
    console.log(idCompra);
    this.httpClient.delete('/api/Compras/' + idCompra)
    .subscribe(
        (val) => {
            console.log('DELETE call successful value returned in body',
                        val);
        },
        response => {
            console.log('DELETE call in error', response);
        },
        () => {
            console.log('The DELETE observable is now completed.');
        });


  }

  postRol(nombreRolForm: string, descripcionRolForm: string) {
    this.httpClient.post('api/Roles',
      {
        nombreRol: nombreRolForm,
        descripcionRol: descripcionRolForm
      })
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {

          console.log('Error', error);

        });
  }

  postProducto(barra: number, nombre: string, descrip: string, prove: string, precio: number, imp: string, desc: string, suc: string) {
    this.httpClient.post('api/Productos',
      {
        codigoBarraProducto: barra,
        nombreProducto: nombre,
        descripcionProducto: descrip,
        proveedorProducto: prove,
        precioProducto: precio,
        impuestoProducto: imp,
        descuentoProducto: desc,
        sucursalProducto: suc
      })
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {

          console.log('Error', error);

        });
  }
  postCompras(descrip: string, fechaReal: Date, fechaReg: Date, prov: string, foto: string, suc: string) {
    this.httpClient.post('api/Compras',
      {
        descripcionCompra: descrip,
        fechaRealCompra: fechaReal.toLocaleDateString('en-GB'),
        fechaRegistroCompra: fechaReg.toLocaleDateString('en-GB'),
        proveedorCompra: prov,
        fotoCompra: foto,
        sucursalRegistraCompra: suc
      })
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {

          console.log('Error', error);

        });
  }
//
// postPlanilla() {}

  postProveedores(cedula: string, nombre: string) {
    this.httpClient.post('api/Proveedores',
      {
        cedulaProveedor: cedula,
        nombreProveedor: nombre
      })
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {

          console.log('Error', error);

        });

  }

  postSucursales(nombre: string, direccion: string, telefono: number, admin: string) {
    this.httpClient.post('api/Sucursales',
      {
        nombreSucursal: nombre,
        direccionSucursal: direccion,
        telefonoSucursal: telefono,
        administradorSucursal: admin
      })
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {

          console.log('Error', error);

        });
  }

  postTrabajadores(cedula: number, nombre: string, nacimiento: Date, ingreso: Date, sucursal: string, salario: number) {
    this.httpClient.post('api/Trabajadores',
      {
        cedulaTrabajador: cedula,
        nombreCompletoTrabajador: nombre,
        fechaNacimientoTrabajador: nacimiento.toLocaleDateString('en-GB'),
        fechaIngresoTrabajador: ingreso.toLocaleDateString('en-GB'),
        sucursalTrabajador: sucursal,
        salarioHoraTrabajador: salario
      })
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {

          console.log('Error', error);

        });
  }
  putDataRoles(nombreRol:string, descripcionRol:string){
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    this.httpClient.put("/api/Roles",
    {
      "nombreRol": nombreRol,
      "descripcionRol": descripcionRol
    },
    {headers})
    .subscribe(
        val => {
            console.log("PUT call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
  }

  putDataSucursales(nombreSucursal:string,direccionSucursal:string,telefonoSucursal:number,admnistradorSucursal:string){
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    this.httpClient.put("/api/Sucursales",
    {
      "nombreSucursal": nombreSucursal,
      "direccionSucursal": direccionSucursal,
      "telefonoSucursal": telefonoSucursal,
      "administradorSucursal": admnistradorSucursal
    },
    {headers})
    .subscribe(
        val => {
            console.log("PUT call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
  }

  putDataTrabajadores(cedulaTrabajador:number, nombreCompletoTrabajador:string, fechaNacimientoTrabajador:string,
    fechaIngresoTrabajador:string, sucursalTrabajador:string, salarioHoraTrabajador:number){
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    this.httpClient.put("/api/Trabajadores",
    {
      "cedulaTrabajador": cedulaTrabajador,
      "nombreCompletoTrabajador": nombreCompletoTrabajador,
      "fechaNacimientoTrabajador": fechaNacimientoTrabajador,
      "fechaIngresoTrabajador": fechaIngresoTrabajador,
      "sucursalTrabajador": sucursalTrabajador,
      "salarioHoraTrabajador": salarioHoraTrabajador
    },
    {headers})
    .subscribe(
        val => {
            console.log("PUT call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
  }

  putDataProductos(codigoBarraProducto: number,
    nombreProducto: string,
    descripcionProducto: string,
    proveedorProducto: string,
    precioProducto: number,
    impuestoProducto: string,
    descuentoProducto: string,
    sucursalProducto: string){

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    this.httpClient.put("/api/Productos",
    {

        "codigoBarraProducto": codigoBarraProducto,
        "nombreProducto": nombreProducto,
        "descripcionProducto": descripcionProducto,
        "proveedorProducto": proveedorProducto,
        "precioProducto": precioProducto,
        "impuestoProducto": impuestoProducto,
        "descuentoProducto": descuentoProducto,
        "sucursalProducto": sucursalProducto
    },
    {headers})
    .subscribe(
        val => {
            console.log("PUT call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
  }

  putDataProveedores(cedulaProveedor:string, nombreProveedor:string){
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    this.httpClient.put("/api/Proveedores",
    {
      "cedulaProveedor": cedulaProveedor,
      "nombreProveedor": nombreProveedor
    },
    {headers})
    .subscribe(
        val => {
            console.log("PUT call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
  }

  putDataCompras(descripcionCompra: string,
    fechaRealCompra: Date,
    fechaRegistroCompra: Date,
    proveedorCompra: string,
    fotoCompra: string,
    sucursalRegistraCompra: string){

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    this.httpClient.put("/api/Compras",
    {
      "descripcionCompra": descripcionCompra,
      "fechaRealCompra": fechaRealCompra,
      "fechaRegistroCompra": fechaRegistroCompra,
      "proveedorCompra": proveedorCompra,
      "fotoCompra": fotoCompra,
      "sucursalRegistraCompra": sucursalRegistraCompra
    },
    {headers})
    .subscribe(
        val => {
            console.log("PUT call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
  }
}

