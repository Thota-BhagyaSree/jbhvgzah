import { Component } from '@angular/core';
import { PlanterDto } from '../planter-dto';
import { PlanterOperationService } from '../planter-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-all-planters',
  templateUrl: './all-planters.component.html',
  styleUrls: ['./all-planters.component.css']
})
export class AllPlantersComponent {
  __planterService:PlanterOperationService; // creating object of Service layer
  router:Router;
  allPlanters:PlanterDto [] = [];
  constructor(private planterService:PlanterOperationService,router:Router)
  {
    this.__planterService = planterService;
    this.router = router;
    this.planterService.getAllPlantersFromSpring().subscribe(
      data=>{
          this.allPlanters = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );
  }
 /* viewProductDetails()
  {
    
    this.router.navigate(['planterDetail']);
  }*/
  viewProductDetails(planterId:number,plantName:string,planterShape:string,planterHeight:number,planterCost:number)
  {
    localStorage.removeItem('planterId')
    localStorage.removeItem('plantName')
    localStorage.removeItem('planterShape')
    localStorage.removeItem('planterHeight')
    localStorage.removeItem('planterCost')
   

    localStorage.setItem("planterId",planterId+'');
    localStorage.setItem("plantName",plantName);
    localStorage.setItem("planterShape",planterShape);
    localStorage.setItem("planterHeight",planterHeight+'');
    localStorage.setItem("planterCost",planterCost+'');


    this.router.navigate(['planterDetails']);
    
    
  }
  addOrder()
  {
    
    this.router.navigate(['addOrder']);
  }


}


