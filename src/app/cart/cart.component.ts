import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit
{
  products:any;
 constructor(private api:ApiService){
 
 }
 ngOnInit() {
  var req={
    "token":localStorage.getItem("token")
  };
  this.api.getCartData(req).subscribe(res=>{
    console.log(res);
    this.products=res;
  });
 }

 desc(product_econ_cart_id:number)
 {
var req={
  "product_econ_cart_id":product_econ_cart_id,
  "token":localStorage.getItem("token")
  
};
this.api.dec_cart_qty(req).subscribe(res=>{
  console.log(res);
  this.ngOnInit();

});
 }
 inc(product_econ_cart_id:number)
 {
var req={
  "product_econ_cart_id":product_econ_cart_id,
  "token":localStorage.getItem("token")
  
};
this.api.inc_cart_qty(req).subscribe(res=>{
  console.log(res);
  this.ngOnInit();
});
 }
 remove(product_econ_cart_id:number)
 {
var req={
  "product_econ_cart_id":product_econ_cart_id,
  "token":localStorage.getItem("token")
  
};
this.api.remove_cart_qty(req).subscribe(res=>{
  console.log(res);
  this.ngOnInit();
});
 }
 getTotal()
 {
  this.products;
  var sum=0;
  for(var i=0;i<this.products.length;i++){
    sum=sum+(this.products[i].price * this.products[i].qty)
  }
  return sum;
 }
 
}
