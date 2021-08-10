import { Component, OnInit , Input, Output} from '@angular/core';
import { Registration, Address } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration_info= new Registration;
  view_product_list: boolean = false;

  constructor() { }

  ngOnInit() {
    let address =  new Address
    this.registration_info.shipping_address.push(address)
  }

  onSubmit(){
    this.view_product_list =  true
  }

  addShippingAddress(){
    let address =  new Address
    this.registration_info.shipping_address.push(address)
  }

  removeShippingAddress(index){
    this.registration_info.shipping_address.splice(index, 1)
  }


  isFormValid(){
  }

}
