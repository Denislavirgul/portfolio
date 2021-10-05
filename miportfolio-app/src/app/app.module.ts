import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponent } from './carrusel/carrusel.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DisenograficoComponent } from './disenografico/disenografico.component';
import { HomeComponent } from './home/home.component';
import { DisenowebComponent } from './disenoweb/disenoweb.component';
import { ManualmarcaComponent } from './manualmarca/manualmarca.component';
import { RevistaComponent } from './revista/revista.component';
import { IlustracionesComponent } from './ilustraciones/ilustraciones.component';
import { FotografiasComponent } from './fotografias/fotografias.component';
import { VideosComponent } from './videos/videos.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarruselComponent,
    GaleriaComponent,
    SobremiComponent,
    ContactoComponent,
    DisenograficoComponent,
    HomeComponent,
    DisenowebComponent,
    ManualmarcaComponent,
    RevistaComponent,
    IlustracionesComponent,
    FotografiasComponent,
    VideosComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
