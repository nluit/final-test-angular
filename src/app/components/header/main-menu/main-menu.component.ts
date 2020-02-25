import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service'
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private dataservice : DataService  ) {

   }
  public category = null;
  isLogin(){
    this.dataservice.tokenSubject.subscribe(val=>  { if(val != null ) this.checklogin = 1 
    else 
    this.checklogin=0
  });
    // this.checklogin =0;
  }
  public checklogin=0;
  ngOnInit() {

    console.log(this.checklogin);
    this.isLogin();
    this.dataservice.totalSubject.subscribe(val=>  { this.checklogin= 1 });
    this.dataservice.getCategory().subscribe(val => this.category = val)
  }

}
