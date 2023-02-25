import { Component } from '@angular/core';
import { Plantdto } from '../plantdto';
import { PlantoperationService } from '../plantoperation.service';

@Component({
  selector: 'app-plant-filterations',
  templateUrl: './plant-filterations.component.html',
  styleUrls: ['./plant-filterations.component.css']
})
export class PlantFilterationsComponent {

  allPlants:Plantdto[]=[];

  constructor(private plantService:PlantoperationService)
  {

  }

  

  getTypeOfPlant(typeOfPlant:string){

    this.plantService.getDetailsByTypeOfPlant(typeOfPlant).subscribe (
      data=>{
        this.allPlants = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );


}
}


