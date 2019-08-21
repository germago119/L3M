import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('Data service is working!');
  }

  getData() {
    return this.httpClient.post('/api/Roles',
    {
      nombreRol: 'Cusgfgfh3',
      descripcionRol: 'cusgvgvgh4'
    })
    .subscribe(
    data  => {
      console.log('POST Request is successful ', data);
    },
    error  => {

      console.log('Error', error);

    }

    );
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

// postCompras() {}
//
// postPlanilla() {}

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

// postTrabajadores() {}
//
// postProveedores() {}
//
// postProductos() {}
}

