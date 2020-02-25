import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth.service';
import {DataService } from '../../../services/data.service'
import { Observable , from , fromEvent } from 'rxjs';
import { tap, map , toArray } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
 
  constructor(private translate: TranslateService , private authservice :AuthService , private dataservice : DataService , public route : Router) {
    translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  countItem(){
    if(this.dataservice.getCart() == null) return 0;
    else return this.dataservice.getCart().length;
  }

  public userid ;
  public result =null ;
  public qty = this.countItem();
  
  logout(){
    localStorage.removeItem('access_token');  
    localStorage.removeItem('userId');  
    this.dataservice.sendtoken(null)
    this.route.navigate(['login']);
  }  

  showCart(){
    if(this.dataservice.getCart() == null) return null;
    else return this.dataservice.getCart();
  
  }
  removeCart(){
    localStorage.removeItem('cart');  
    this.dataservice.sendCart(null);
    this.dataservice.sendTotal(0);
    this.dataservice.cart = [];

  }
  public cart = this.showCart();
  ngOnInit() {
    // this.dataservice.tokenSubject.subscribe(val=>console.log(val))
    this.dataservice.listSubject.subscribe(val => this.cart = val );
    this.countItem();
    this.dataservice.totalSubject.subscribe(total => {
       console.log(total) ;
       this.qty = total;
    });
  }

}