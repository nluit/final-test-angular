import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject , Subject } from 'rxjs';
import { tap, map ,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
 
  constructor(private _http: HttpClient ) { }
 
  public url =`https://server-nestjs-3.herokuapp.com`;
  // public url =`http://localhost:3000`;
 
  getProduct() : Observable<any> {
    return this._http.get(this.url+'/product');
  }
  
  getProductDetail(id) : Observable<any> {
    return this._http.get(this.url+'/product/'+id);
  }
  getNewProduct() : Observable<any> {
    return this._http.get(this.url+'/product/date');
  }
  getProductprice(val) : Observable<any> {
    return this._http.post(this.url+'/product/price', {val : val } )
  }

  getDiscountProduct(){
    return this._http.get(this.url+'/product/discount');
  }
 
}

