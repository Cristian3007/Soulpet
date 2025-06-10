import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { AdministrarComponent } from './components/administrar/administrar.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetallemascotaComponent } from './components/detallemascota/detallemascota.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncuestaComponent,
    MascotasComponent,
    AdministrarComponent,
    FaqComponent,
    ContactComponent,
    NavbarComponent,
    DetallemascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
