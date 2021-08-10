import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  cart_items: any[];
    
  @Output()
  onBack = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  updateQuantity(item, action){
    if(action == 'add'){
     item.item_quantity = item.item_quantity +1
    }else if(action == 'sub'){
      item.item_quantity = item.item_quantity -1
    }
  }


  backToProductList(){
    this.onBack.emit(false)
  }

  removeItem(item){
    let item_index =  this.cart_items.findIndex(x=> x.id == item.id )
    if(item_index > -1){
       this.cart_items.splice(item_index, 1)
    }
    console.log("this.cart_items-----", this.cart_items)
  }

  getTotalAmount(){
    let amount = 0
    this.cart_items.forEach(x=> {
      amount = amount + this.getPrice(x)
    })
    return amount;
  }

  getPrice(item){
    if(item){
      return item.price * item.item_quantity
    }
  }
}
