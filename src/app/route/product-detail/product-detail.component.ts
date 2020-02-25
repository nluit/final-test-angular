import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { list_product } from '../../product-list';
import {DataService } from '../../services/data.service'
declare var $: any;
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public products = list_product;
  public result =null ;
  constructor(  public activatedRoute : ActivatedRoute , private dataservice : DataService  ) { 

  }
  public qty=1;
  plus(){
    this.qty= this.qty+1;
  }
  minus(){
    if(this.qty==1) this.qty=1
    else  this.qty= this.qty - 1;
    
  }
  public cart_item_count = 0;
  addTocart(value : any ){    
    var cart_order = {
      id : value.id,
      price: value.product_price,
      name : value.product_name,
      img :value.img, 
      qty : this.qty,
    }

    const rs = this.dataservice.cart.find(item => item.id === value.id);
    if(rs=== undefined) this.dataservice.cart.push(cart_order);  
    else {
      this.dataservice.cart.map(item => {
        if(rs.id === item.id) item.qty=item.qty+this.qty;
      })
    }

    localStorage.setItem('cart', JSON.stringify(this.dataservice.cart));
    this.cart_item_count = this.dataservice.getCart().length;
    this.dataservice.sendTotal(this.cart_item_count);
    this.dataservice.sendCart(this.dataservice.getCart());

   
}
  ngOnInit() {
    this.activatedRoute.params.subscribe(id => {      
      this.dataservice.getProductDetail(id.id).pipe().subscribe(val=>  {this.result=val ; console.log(this.result) ; });     
     
     });
     $(document).ready(function(){
      $('.image-zoom')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom({
        url: $(this).find('img').attr('data-zoom')
      });
    }); 

     
  }

}
