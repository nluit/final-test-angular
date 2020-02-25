import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject , Subject } from 'rxjs';
import { tap, map ,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public totalSubject = new Subject();
  public listSubject = new Subject();
  public userSubject = new Subject();
  public cart = this.get_cart_order();
  // public cart = [];
  constructor(private _http: HttpClient ) { }
  sendTotal(totalVal){     
    this.totalSubject.next(totalVal);
  }  
  sendCart(value){
    this.listSubject.next(value);
  }
  sendUser(value : any){
    this.userSubject = value;
  }
 
  get_cart_order(){
    if(JSON.parse(localStorage.getItem("cart"))== null ) return this.cart =[];
    else {
     return  this.cart= JSON.parse(localStorage.getItem("cart"));
    }
  }
  getCart () {    
    return  JSON.parse(localStorage.getItem("cart"));
  }
  
}