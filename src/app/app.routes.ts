 
import { RouterModule , Routes} from '@angular/router'

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
import { ProductDetailComponent } from './route/product-detail/product-detail.component';
import { RegisterComponent } from './route/register/register.component';

export const appRoutes : Routes = [
    {
      path : 'home',
      component : HomeComponent
    },
    {
      path : '',
      redirectTo :'/home',
      pathMatch : 'full'
    },
    {
        path : 'contact',
        component : ContactComponent
      },
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'product',
      //   component : ProductComponent,
        children : [
          {
              path : '',
              redirectTo :'/product/list',
              pathMatch : 'full'
          },
          {
              path : 'list',
              component : ProductComponent
          },
          {
              path : ':id',
              component : ProductDetailComponent
          },
        ]
      },
      {
        path : 'sign-up',
        component : RegisterComponent
      },
]