import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VAdminComponent} from './v-admin/v-admin.component';
import {VReportComponent} from './v-report/v-report.component';
import {VPuntoVentaComponent} from './v-punto-venta/v-punto-venta.component';
import {GTrabajadoresComponent} from './g-trabajadores/g-trabajadores.component';
import {GComprasComponent} from './g-compras/g-compras.component';
import {AHorasComponent} from './a-horas/a-horas.component';
import {AlertModule, BsDatepickerModule, ButtonsModule, ModalModule, PaginationModule} from 'ngx-bootstrap';
import {GRolesComponent} from './g-roles/g-roles.component';
import {GSucursalesComponent} from './g-sucursales/g-sucursales.component';
import {GProveedoresComponent} from './g-proveedores/g-proveedores.component';
import {ProductosComponent} from './productos/productos.component';
import {GPlanillaComponent} from './g-planilla/g-planilla.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {VHomeComponent} from './v-home/v-home.component';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    VAdminComponent,
    VReportComponent,
    VPuntoVentaComponent,
    GTrabajadoresComponent,
    GComprasComponent,
    AHorasComponent,
    GRolesComponent,
    GSucursalesComponent,
    GProveedoresComponent,
    ProductosComponent,
    GPlanillaComponent,
    PagenotfoundComponent,
    VHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
