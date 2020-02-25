import { Component, OnInit } from '@angular/core';
import { list_product} from '../../product-list'
import { NgxSpinnerService } from "ngx-spinner";
import {DataService } from '../../services/data.service'
import { tap, map , toArray } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( private dataservice : DataService ) { }
  
  public products = null;
  public price = 1;
  public cate_value;
  public category =null;
  public cart_item_count = 0;
  addTocart(value : any ){    
      var cart_order = {
        id : value.id,
        price: value.product_price,
        name : value.product_name,
        img :value.img, 
        qty : 1,
      }

      const rs = this.dataservice.cart.find(item => item.id === value.id);
      if(rs=== undefined) this.dataservice.cart.push(cart_order);  
      else {
        this.dataservice.cart.map(item => {
          if(rs.id === item.id) item.qty=item.qty+1;
        })
      }
      // else {

      // }

      localStorage.setItem('cart', JSON.stringify(this.dataservice.cart));
      this.cart_item_count = this.dataservice.getCart().length;
      this.dataservice.sendTotal(this.cart_item_count);
      this.dataservice.sendCart(this.dataservice.getCart());

     
  }
  ngOnInit() {

    this.dataservice.getCategory().subscribe(val => this.category = val);
    this.dataservice.getProduct().subscribe(val => { this.products=val;  } )    
  } 
  selectChangeHandler (event: any) {
    this.price = event.target.value;
    if(this.price == 0 ) {
      this.dataservice.getProduct().subscribe(val => { this.products=val;} )
    }
    if(this.price==1 )  {
      this.products.sort(function(a,b) {
        if(a.discount != 0 && b.discount !=0 ) {
          return ((a.product_price)-a.product_price*(a.discount/100)) - ((b.product_price)-b.product_price*(b.discount/100));
        }
        if(a.discount != 0 && b.discount ==0 ) {
          return ((a.product_price)-a.product_price*(a.discount/100)) - b.product_price;
        }
        if(a.discount == 0 && b.discount !=0 ) {
          return a.product_price - ((b.product_price)-b.product_price*(b.discount/100));
        }       

      });
    }

    if(this.price ==2)
     {
      this.products.sort(function(a,b) {
        if(a.discount != 0 && b.discount !=0 ) {
          return ((b.product_price)-b.product_price*(b.discount/100)) - ((a.product_price)-a.product_price*(a.discount/100));
        }
        if(a.discount != 0 && b.discount ==0 ) {
          return b.product_price - ((a.product_price)-a.product_price*(a.discount/100));
        }
        if(a.discount == 0 && b.discount !=0 ) {
          return ((b.product_price)-b.product_price*(b.discount/100)) - a.product_price;
        }       

    });
    }
    console.log(this.products);
  }

  selectCategory($event){
    this.cate_value = $event.target.value;
    if(this.cate_value == 0 ) {
      this.dataservice.getProduct().subscribe(val => { this.products=val;} )
    }
    else {
        this.dataservice.getProductCategory( Number(this.cate_value)).subscribe(val => this.products = val );
    }
    
  }
  



}
