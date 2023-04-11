import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomersComponent } from './customers/customers.component';
import { NewComponent } from './new/new.component';
import { ServicesComponent } from './services/services.component';
import { InnovationComponent } from './innovation/innovation.component';
import { ContactComponent } from './contact/contact.component';
import { FootComponent } from './foot/foot.component';
import { CrearNoticiaComponent } from './admin/crear-noticia/crear-noticia.component';
import { CrearEventoComponent } from './admin/crear-evento/crear-evento.component';
import { VerNoticiaComponent } from './new/ver-noticia/ver-noticia.component';
import { VerEventoComponent } from './innovation/ver-evento/ver-evento.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { DashAdminComponent } from './admin/dash-admin/dash-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    AboutUsComponent,
    CustomersComponent,
    NewComponent,
    ServicesComponent,
    InnovationComponent,
    ContactComponent,
    FootComponent,
    CrearNoticiaComponent,
    CrearEventoComponent,
    VerNoticiaComponent,
    VerEventoComponent,
    LoginAdminComponent,
    DashAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
