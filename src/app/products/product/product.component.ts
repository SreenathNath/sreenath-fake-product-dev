import { Component, EventEmitter, Input, OnInit, Output ,  ViewChild} from '@angular/core';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  item_quantity: number = 1;

  @Input()
  selected_product: any;

  @Input()
  cart_items: any;
    
  @Output()
  onBack = new EventEmitter();

  @Output()
  onGoCart= new EventEmitter();

  @Output()
  onUpdateCart= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  addToCart(item){
    item.item_quantity = this.item_quantity;
    this.cart_items.push(item)
    this.onUpdateCart.emit(this.cart_items)
  }

  backToProductList(){
    this.onBack.emit(false)
  }

  goToCart(){
    this.onGoCart.emit(false)
  }

  isItemExistOnCart(){
    if(this.cart_items && this.cart_items.find(x=> x.id == this.selected_product.id)){
      return true;
    }else{
      return false;
    }
  }

}
