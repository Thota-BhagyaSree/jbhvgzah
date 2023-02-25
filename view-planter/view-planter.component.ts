import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planter } from '../planter';
import { PlanterOperationService } from '../planter-operation.service';
import { PlanterDto } from '../planter-dto';

@Component({
  selector: 'app-view-planter',
  templateUrl: './view-planter.component.html',
  styleUrls: ['./view-planter.component.css']
})
export class ViewPlanterComponent {
  planterId:string='';
  plantName:string='';
  planterShape:string='';
  planterHeight:string='';
  planterCost:string='';
  
  constructor() {
    this.planterId=localStorage.getItem("planterId")||'';
    this.plantName=localStorage.getItem("plantName") ||'';
    this.planterShape=localStorage.getItem("planterShape") ||'';
    this.planterHeight=localStorage.getItem("planterHeight") ||'';
    this.planterCost=localStorage.getItem("planterCost") ||'';
    
   }


}
