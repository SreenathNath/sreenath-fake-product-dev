export class Registration {
    name: string;
    email: string;
    phone_number: number;
    billing_address: Address;
    shipping_address: Address[]=[];

}


export class Address {
    address: string;
    phone_number: string;
    pincode: number;
}

