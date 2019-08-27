import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RestApiService } from './rest-api.service';
import {HttpClientModule} from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import {Routes,RouterModule} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import {LimitToProductPipe } from './products/products.pipe';
import {FilterProductsPipe } from './products/productsfilter.pipe';
import { LoginComponent } from './login/login.component';
import { CompraComponent } from './compra/compra.component'
const routes:Routes = [
  {
    path : 'products',
    component : ProductsComponent,

  },
  {
    path : 'register',
    component: RegistrationComponent,

  },
  { path: '',
  redirectTo: '/register',
  pathMatch: 'full'
},
  // {
  //   path : '/profile',
  //   component : ProfileComponent,

  // },
  {
    path : 'login',
    component: LoginComponent,
  },
  {
    path : 'compra',
    component: CompraComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegistrationComponent,
    NavbarComponent,
    ProductsComponent,
    LimitToProductPipe,
    FilterProductsPipe,
    LoginComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
