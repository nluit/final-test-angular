import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router'
import { HttpClientModule, HttpClient  , HTTP_INTERCEPTORS} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
import { DataService } from './services/data.service';
import {AuthService} from './services/auth.service';
import { AuthInterceptor } from  './services/authconfig';
import { UserComponent } from './route/user/user.component'
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,      
    ReactiveFormsModule,
    // NgxSpinnerModule,
    // BrowserAnimationsModule,
        // NoopAnimationsModule,
    
  ],
  providers: [DataService  , AuthService , {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
