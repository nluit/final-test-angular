import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataservice : DataService) { }
  public form = new FormGroup({
    email: new FormControl('' ,[Validators.required, Validators.email ]),
    password : new FormControl('',[Validators.required]),
    username : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required , Validators.pattern('[0-9]*')] ),
    date_of_birth : new FormControl('',[Validators.required]),
  })
  submit(){
    let user = {
      email:this.form.value.email,
      username:this.form.value.username,
      phone:this.form.value.phone,
      date_of_birth:this.form.value.date_of_birth,
      password: this.form.value.password,
    }
    console.log(user);
    this.dataservice.postRegister(user).subscribe(val=> console.log(val));
  }

  ngOnInit() {
  }

}
