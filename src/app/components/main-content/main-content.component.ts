import { Component, OnInit } from '@angular/core';
import { list_product} from '../../product-list'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }
  samsung =[];
  iphone =[];
  oppo =[];
  public products = list_product;
  ngOnInit() {
    this.products.map(i=>{
      if(i.category=="Samsung")
      this.samsung.push(i);
      if(i.category=="iphone")
      this.iphone.push(i);
      if(i.category=="oppo")
      this.oppo.push(i);
    })
    console.log(this.samsung);

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
