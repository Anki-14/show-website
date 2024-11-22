import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { OpenCatgoryComponent } from './open-catgory/open-catgory.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderBillComponent } from './order-bill/order-bill.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"create_account",component:CreateAccountComponent},
    {path:"open_catgory/:cat_id/:cat_name",component:OpenCatgoryComponent},
    {path:"product-details/:product_id",component:ProductDetailsComponent},
    {path:"cart",component:CartComponent},
    {path:"place_order",component:PlaceOrderComponent},
    {path:"order_bill/:order_id",component:OrderBillComponent},
    {path:"my-orders",component:MyOrdersComponent}
];
