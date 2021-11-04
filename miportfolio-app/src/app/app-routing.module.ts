import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DisenograficoComponent } from './disenografico/disenografico.component';
import { DisenowebComponent } from './disenoweb/disenoweb.component';
import { FotografiasComponent } from './fotografias/fotografias.component';
import { HomeComponent } from './home/home.component';
import { IlustracionesComponent } from './ilustraciones/ilustraciones.component';
import { ManualmarcaComponent } from './manualmarca/manualmarca.component';
import { RevistaComponent } from './revista/revista.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'dgrafico', component: DisenograficoComponent},
  {path: 'dweb', component: DisenowebComponent},
  {path: 'mmarca', component: ManualmarcaComponent},
  {path: 'revista', component: RevistaComponent},
  {path: 'ilustraciones', component: IlustracionesComponent},
  {path: 'fotografias', component: FotografiasComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'videojuegos', component: VideojuegosComponent},
  {path: 'sobremi', component: SobremiComponent},
  {path: 'contacto', component: ContactoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
