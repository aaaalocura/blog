import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomersComponent } from './customers/customers.component';
import { NewComponent } from './new/new.component';
import { ServicesComponent } from './services/services.component';
import { InnovationComponent } from './innovation/innovation.component';
import { ContactComponent } from './contact/contact.component';
import { DashAdminComponent } from './admin/dash-admin/dash-admin.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { CrearEventoComponent } from './admin/crear-evento/crear-evento.component';
import { CrearNoticiaComponent } from './admin/crear-noticia/crear-noticia.component';

//components

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'nav',
    component: NavbarComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'innovation',
    component: InnovationComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  //admin
  {
    path: 'admin',
    component: DashAdminComponent,
  },
    {
    path: 'admin/login',
    component: LoginAdminComponent,
  },
    {
    path: 'admin/crear-evento',
    component: CrearEventoComponent,
  },
   {
    path: 'admin/crear-noticia',
    component: CrearNoticiaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
