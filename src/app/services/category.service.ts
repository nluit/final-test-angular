import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject , Subject } from 'rxjs';
import { tap, map ,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
 
  constructor(private _http: HttpClient ) { }
 
  public url =`https://server-nestjs-3.herokuapp.com`;
  // public url =`http://localhost:3000`;
 

  getCategory(){
    return this._http.get(this.url+'/category');
  }
  getProductCategory(id){
    return this._http.get(this.url+'/product/category/'+id);
  }


}

