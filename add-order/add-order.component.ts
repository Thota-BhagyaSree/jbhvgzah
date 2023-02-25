import { Component } from '@angular/core';
import { OrderDTO, OrderRequestDTO } from '../order-dto';
import { OrderOperationService } from '../order-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Seed } from '../seed';
import { SeedOperationService } from '../seed-operation.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {
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


  seedName: string='';
    typesOfSeeds: string='';
    seedsStock: string='';
    seedsPerPacket: string='';

    planterId:string='';
  plantName:string='';
  planterShape:string='';
  planterHeight:string='';
  planterCost:string='';
    
    

  order:OrderRequestDTO = new OrderRequestDTO('',0,0,0,0,'');

  orderDto:OrderDTO = new OrderDTO(0,0,'',0,0,0,0,'',0);

  

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

    this.seedName=localStorage.getItem("seedName") ||'';
    
    this.typesOfSeeds=localStorage.getItem("typesOfSeeds") ||'';
    this.seedsStock=localStorage.getItem("seedsStock") || '';


    this.planterId=localStorage.getItem("planterId")||'';
    this.plantName=localStorage.getItem("plantName") ||'';
    this.planterShape=localStorage.getItem("planterShape") ||'';
    this.planterHeight=localStorage.getItem("planterHeight") ||'';
    this.planterCost=localStorage.getItem("planterCost") ||'';
   
    console.log("---------------------------- inside constructor")
    console.log("category" +this.category);
    console.log("cost" +this.price);
    console.log("productId" +this.productId);

    this.order.category=this.category;
    this.order.totalCost=parseInt(this.price);
    this.order.productId=parseInt(this.productId);

    this.router = router;
    
   }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.order);
    this.doSaveTOServer();

    this.router.navigate(['completeOrder']);

  }

  doSaveTOServer()
  {
    this.orderService.addOrder(this.order).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
          //code to navigate to order successful page
      },
      error => {
        console.log(error);
        
      }
     );

}
}
