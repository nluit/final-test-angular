import { Component, OnInit } from '@angular/core';
import { list_product} from '../../product-list'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
  
  public products = list_product;
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {     
      this.spinner.hide();
    }, 1000);
    console.log(this.products);
    
  }

}
