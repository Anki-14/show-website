import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [RouterModule, NavbarComponent,FormsModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
 constructor(private api:ApiService, private router:Router){}
  place_order(form:any)
  {
     console.log(form.value) 
     form.value.token = localStorage.getItem("token");
    this.api.place_order(form.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(["/order_bill/"+res.order_id]);
    });
  }
}
