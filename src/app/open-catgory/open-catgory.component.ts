import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-open-catgory',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './open-catgory.component.html',
  styleUrl: './open-catgory.component.css'
})
export class OpenCatgoryComponent 
{   
  products:any;
  cat_name:any;
   constructor(private activeroute:ActivatedRoute,private api:ApiService)
   {
    this.activeroute.params.subscribe((urldata:any)=>{
      this.cat_name=urldata.cat_name;
      this.api.grtProductByCat({"cat_id":urldata.cat_id}).subscribe(res=>{
        this.products=res;
       
      });
   });
  }
}
