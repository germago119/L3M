import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-v-admin',
  templateUrl: './v-admin.component.html',
  styleUrls: ['./v-admin.component.css']
})
export class VAdminComponent implements OnInit {

  roles = false;
  sucursales = false;
  trabajadores = false;
  proveedores = false;
  productos = false;
  compras = false;
  horas = false;
  planilla = false;

  constructor() {
  }

  activarHoras() {
    this.horas = true;
  }

  desactivarHoras() {
    this.horas = false;
  }

  activarPlanilla() {
    this.planilla = true;
  }

  desactivarPlanilla() {
    this.planilla = false;
  }

  activarSucursales() {
    this.sucursales = true;
  }

  desactivarSucursales() {
    this.sucursales = false;
  }

  activarRoles() {
    this.roles = true;
  }

  desactivarRoles() {
    this.roles = false;
  }

  activarTrabajadores() {
    this.trabajadores = true;
  }

  desactivarTrabajadores() {
    this.trabajadores = false;
  }

  activarProveedores() {
    this.proveedores = true;
  }

  desactivarProveedores() {
    this.proveedores = false;
  }

  activarProductos() {
    this.productos = true;
  }

  desactivarProductos() {
    this.productos = false;
  }

  activarCompras() {
    this.compras = true;
  }

  desactivarCompras() {
    this.compras = false;
  }

  ngOnInit() {
  }

}
