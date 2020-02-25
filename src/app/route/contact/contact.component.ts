import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  public form = new FormGroup({
    fullname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('' ,[Validators.required, Validators.email ]),
    message : new FormControl('Message...')
  })
  submit() {
    let messages = {
      fullname:this.form.value.fullname, 
      email: this.form.value.email,
      message: this.form.value.message
    }
    this.dataservice.postData(messages).subscribe(res=> console.log(res));
  }
  ngOnInit() {
  }

}