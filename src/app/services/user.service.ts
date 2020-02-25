import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject , Subject } from 'rxjs';
import { tap, map ,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 
  constructor(private _http: HttpClient ) { }
 
  public url =`https://server-nestjs-3.herokuapp.com`;
  // public url =`http://localhost:3000`;
  postData (messages) : Observable<any> {
    return this._http.post(this.url+'/contact', {fullname:messages.fullname, email:messages.email, message:messages.message} )
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

