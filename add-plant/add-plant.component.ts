import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantoperationService } from '../plantoperation.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  numberOfStars = [1, 2, 3, 4, 5];
  model:Plant = new Plant(0,'',0,'','','',0,0,0,'');
  constructor(private plantService:PlantoperationService){}
  ngOnInit(): void {
    
  }
  onSubmit()
  {
    console.log(this.model);
    this.doSaveToServer();
    
  }

  doSaveToServer()
  {
    this.plantService.addPlant(this.model).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
    
  }

}
