import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {VAdminComponent} from '../v-admin/v-admin.component';
import {VReportComponent} from '../v-report/v-report.component';
import {VPuntoVentaComponent} from '../v-punto-venta/v-punto-venta.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';
import {AppComponent} from '../app.component';
import {VHomeComponent} from '../v-home/v-home.component';
import {AHorasComponent} from '../a-horas/a-horas.component';
import {GRolesComponent} from '../g-roles/g-roles.component';
import {GSucursalesComponent} from '../g-sucursales/g-sucursales.component';
import {GProveedoresComponent} from '../g-proveedores/g-proveedores.component';
import {ProductosComponent} from '../productos/productos.component';
import {GTrabajadoresComponent} from '../g-trabajadores/g-trabajadores.component';
import {GComprasComponent} from '../g-compras/g-compras.component';
import {GPlanillaComponent} from '../g-planilla/g-planilla.component';

const routes: Routes = [
  {path: '', component: VHomeComponent},
  {path: 'admin', component: VAdminComponent},
  {path: 'admin/horas', component: AHorasComponent},
  {path: 'admin/roles', component: GRolesComponent},
  {path: 'admin/sucursales', component: GSucursalesComponent},
  {path: 'admin/proveedores', component: GProveedoresComponent},
  {path: 'admin/productos', component: ProductosComponent},
  {path: 'admin/trabajadores', component: GTrabajadoresComponent},
  {path: 'admin/compras', component: GComprasComponent},
  {path: 'admin/horas', component: AHorasComponent},
  {path: 'admin/planilla', component: GPlanillaComponent},
  {path: 'report', component: VReportComponent},
  {path: 'pventa', component: VPuntoVentaComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
