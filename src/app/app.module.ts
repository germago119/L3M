import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VAdminComponent } from './v-admin/v-admin.component';
import { VReportComponent } from './v-report/v-report.component';
import { VPuntoVentaComponent } from './v-punto-venta/v-punto-venta.component';
import { GTrabajadoresComponent } from './g-trabajadores/g-trabajadores.component';
import { GComprasComponent } from './g-compras/g-compras.component';
import { AHorasComponent } from './a-horas/a-horas.component';
import {AlertModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VAdminComponent,
    VReportComponent,
    VPuntoVentaComponent,
    GTrabajadoresComponent,
    GComprasComponent,
    AHorasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
