import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject , Subject } from 'rxjs';
import { tap, map ,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  public totalSubject = new Subject();
  public listSubject = new Subject();
  public tokenSubject = new Subject();
  public cart = this.get_cart_order();
  constructor(private _http: HttpClient ) { }
  sendTotal(totalVal){     
    this.totalSubject.next(totalVal);
  }  
  sendCart(value){
    this.listSubject.next(value);
  }
  sendtoken(value){
    this.tokenSubject.next(value);
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
  public url =`https://server-nestjs-3.herokuapp.com`;
  // public url =`http://localhost:3000`;
  postData (messages) : Observable<any> {
    return this._http.post(this.url+'/contact', {fullname:messages.fullname, email:messages.email, message:messages.message} )
  }
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
  getCategory(){
    return this._http.get(this.url+'/category');
  }
  getProductCategory(id){
    return this._http.get(this.url+'/product/category/'+id);
  }
  getDiscountProduct(){
    return this._http.get(this.url+'/product/discount');
  }
  postLogin(user) : Observable<any> {
    return this._http.post<{access_token: string , userId : number}>(this.url+'/auth/login' , { username : user.username , password : user.password }).pipe(tap(res => {
      console.log(res);
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('userId',res.userId);
  }))
  }
  postRegister(user) : Observable<any>{
    return this._http.post(this.url+'/users', {username: user.username, password : user.password, email: user.email, phone:user.phone , date_of_birth: user.date_of_birth })
  }
  getUser(id): Observable<any>{
    return this._http.get(this.url+'/users/'+Number(id));
  }
}