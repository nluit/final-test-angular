import { Component, OnInit } from '@angular/core';
import {DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public result = null;
  constructor(private dataservice : DataService ) { }

  ngOnInit() {
    var id = Number(localStorage.getItem("userId"));
    this.dataservice.getUser(id).subscribe(val => {  this.result = val ; console.log(this.result.usename) ; });
  }

}
