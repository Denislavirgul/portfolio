import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisenograficoComponent } from './disenografico/disenografico.component';
import { DisenowebComponent } from './disenoweb/disenoweb.component';
import { HomeComponent } from './home/home.component';
import { ManualmarcaComponent } from './manualmarca/manualmarca.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'dgrafico', component: DisenograficoComponent},
  {path: 'dweb', component: DisenowebComponent},
  {path: 'mmarca', component: ManualmarcaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
