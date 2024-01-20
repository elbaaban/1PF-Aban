import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { UsuarioFormularioComponent } from './layouts/sashboard/pages/usuarios/components/usuario-formulario/usuario-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
