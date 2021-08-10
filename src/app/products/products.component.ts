import { Component, OnInit ,Input} from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input()
  registration_info: any;
    
  product_lists: any = [];
  is_selected_item: boolean = false;
  is_loading: boolean =  true;
  is_nav_cart:  boolean = false;
  selected_product: any;
  cart_items: any[] = []
    
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {

    this.productService.getProducts().then(resp=>{
      this.product_lists = resp;
       this.is_loading =  false;
    })
    }
    
    getsShortDescription(description){
      if(description && description.length > 110){
        return description.slice(0,105) + "..."
      }else{
        return description;
      }
    }


    selectProduct(product){
         this.selected_product = product;
         this.is_selected_item =  true
    }

    onBack(){
      this.is_selected_item =  false;
      this.is_nav_cart =  false;
    }

    onGoCart(){
      this.is_selected_item =  false;
      this.is_nav_cart =  true;
    }

    onUpdateCart(cart_items){
      this.cart_items = cart_items
    }

    navigateCart(){
      this.is_nav_cart =  true;
      this.is_selected_item =  false;
    }
}
