import { Component } from '@angular/core';
import { OrderDTO, OrderRequestDTO } from '../order-dto';
import { OrderOperationService } from '../order-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent {
  router:Router;

  productId:string='';
  productName:string='';
  height:string='';
  category:string='';
  bloomSeason:string='';
  price:string='';
  discount:string='';
  imageName:string='';
  about:string='';
  starRating:string='';


  constructor(private orderService:OrderOperationService,router:Router) {
    this.productId=localStorage.getItem("productId")||'';
    this.productName=localStorage.getItem("productName") ||'';
    this.category=localStorage.getItem("category") ||'';
    this.height=localStorage.getItem("height") ||'';
    this.price=localStorage.getItem("price") ||'';
    this.discount=localStorage.getItem("discount") ||'';
    this.bloomSeason= localStorage.getItem("bloomSeason")||'';
    this.imageName=localStorage.getItem("imageName")||'';
    this.about=localStorage.getItem("about")||'';
    this.starRating=localStorage.getItem("starRating")||'';

    this.router = router;
  }

  addReview()
  {
    
    this.router.navigate(['addReview']);
  }

}
