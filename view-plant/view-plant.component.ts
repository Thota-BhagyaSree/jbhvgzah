import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Plant } from '../plant';
import { PlantoperationService } from '../plantoperation.service';

@Component({
  selector: 'app-view-plant',
  templateUrl: './view-plant.component.html',
  styleUrls: ['./view-plant.component.css']
})
export class ViewPlantComponent {

  plantId:string='';
  plantName:string='';
  height:String='';
  price:string='';


  constructor(){
    this.plantId=localStorage.getItem("plantId")||'';
    this.plantName=localStorage.getItem("plantName")||'';
    this.height=localStorage.getItem("height")||'';
    this.price=localStorage.getItem("price")||'';
  }

}
