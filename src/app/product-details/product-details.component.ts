import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product_info:any;
constructor( private activeroute:ActivatedRoute,  private api:ApiService)
{
  this.activeroute.params.subscribe((urldata:any)=>{
     var product_id=urldata.product_id;
     var req={
      "product_id":product_id,
      "token":localStorage.getItem("token")

     };
     this.api.grtProductDetailsById(req).subscribe(res=>{
      console.log(res);
      this.product_info=res;
    });
  })
}
addtoCart()
{
  var data={
   "product_id": this.product_info.product_tbl_id,
   "token":localStorage.getItem("token")
  };
  this.api.addProductInCart(data).subscribe(res=>{
    this.product_info.cart="Yes";
    this.product_info.qty="Yes";

    console.log(res);
  });
}
}
