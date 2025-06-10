import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdministrarComponent } from './components/administrar/administrar.component';
import { DetallemascotaComponent } from './components/detallemascota/detallemascota.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'administrar', component:AdministrarComponent},
  {path: 'detallemascota', component:DetallemascotaComponent},
  {path: 'encuesta', component:EncuestaComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'cantacto', component:ContactComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
