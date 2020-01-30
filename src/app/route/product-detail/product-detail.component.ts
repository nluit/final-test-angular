import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { list_product } from '../../product-list';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public products = list_product;
  public result =null ;
  constructor(  public activatedRoute : ActivatedRoute ) { 

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(id => {
      for(var i=0 ; i< this.products.length; i++){
        if (this.products[i].product_id == id.id) {
          this.result = this.products[i];
          break
        }
      }
      console.log(id);
      
     });
  }

}
