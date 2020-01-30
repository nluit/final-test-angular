import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router'
import { NgxImageZoomModule } from 'ngx-image-zoom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideComponent } from './components/slide/slide.component';
import { TopBarComponent } from './components/header/top-bar/top-bar.component';
import { MainMenuComponent } from './components/header/main-menu/main-menu.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ContactComponent } from './route/contact/contact.component';
import { HomeComponent } from './route/home/home.component';
import { LoginComponent } from './route/login/login.component';
import { ProductComponent } from './route/product/product.component';

import {appRoutes} from './app.routes';
import { ProductDetailComponent } from './route/product-detail/product-detail.component';
import { RegisterComponent } from './route/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    SlideComponent,
    TopBarComponent,
    MainMenuComponent,
    ShippingComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ProductDetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgxImageZoomModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }