import { Component, OnInit } from '@angular/core';
import { list_product} from '../../product-list'
import {DataService } from '../../services/data.service';
import { from, zip, range ,of , merge , Observable} from 'rxjs';
import {filter,map, mergeMap, take, toArray, reduce , tap , mergeAll , skip} from 'rxjs/operators';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private dataservice : DataService ) { }
  public sale_product = null ;
  samsung =[];
 
  public products = list_product;
  public new_product = null;
  ngOnInit() {
    this.products.map(i=>{
      if(i.category=="Samsung")
      this.samsung.push(i);
      
    })
    // console.log(this.samsung);
    this.dataservice.getNewProduct().subscribe(val => 
    {      
        this.new_product = val;
    });
    this.dataservice.getDiscountProduct().subscribe(val => this.sale_product = val)


  }
  runBanner(value:boolean){
    if(value){
      document.querySelector('.hot-deal').scrollBy(500,0);
      console.log(value);
    }
    else{
      document.querySelector('.hot-deal').scrollBy(-500,0);
    }
  }

  

}