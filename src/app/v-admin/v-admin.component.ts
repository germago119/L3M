import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-admin',
  templateUrl: './v-admin.component.html',
  styleUrls: ['./v-admin.component.css']
})
export class VAdminComponent implements OnInit {

  roles:boolean = false;
  sucursales: boolean = false;
  trabajadores:boolean = false;
  proveedores:boolean = false;
  productos:boolean = false;
  compras:boolean = false;

  activarSucursales(){
    this.sucursales = true;
  }

  desactivarSucursales(){
    this.sucursales = false;
  }

  activarRoles(){
    this.roles = true;
  }

  desactivarRoles(){
    this.roles = false;
  }

  activarTrabajadores(){
    this.trabajadores = true;
  }

  desactivarTrabajadores(){
    this.trabajadores = false;
  }

  activarProveedores(){
    this.proveedores = true;
  }

  desactivarProveedores(){
    this.proveedores = false;
  }

  activarProductos(){
    this.productos = true;
  }

  desactivarProductos(){
    this.productos = false;
  }

  activarCompras(){
    this.compras = true;
  }

  desactivarCompras(){
    this.compras= false;
  }

  constructor() { }

  ngOnInit() {
  }

}
