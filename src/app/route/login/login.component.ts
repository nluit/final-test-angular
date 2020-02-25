import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataservice : DataService , public router : Router ) { }
  public form = new FormGroup({
    username: new FormControl('' ,[Validators.required]),
    password : new FormControl('',[Validators.required])
  })
  public code =null;
  submit(){
    let user = {
      username:this.form.value.username, 
      password: this.form.value.password,
    }
    this.dataservice.postLogin(user).subscribe(val => {
      if(val.code === 201 )  {   this.code=201 ; } 
      this.dataservice.sendtoken(localStorage.getItem('access_token'));
    }, error =>  { this.code = 401 ; this.form.controls['username'].setValue("");
    this.form.controls['password'].setValue("");} );
    

  }
  redirect(){
    this.router.navigate(['home'])
  }
  ngOnInit() {
  }

}
