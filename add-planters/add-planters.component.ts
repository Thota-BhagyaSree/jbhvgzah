import { Component, OnInit } from '@angular/core';
import { Planter } from '../planter';
import { PlanterOperationService } from '../planter-operation.service';


@Component({
  selector: 'app-add-planters',
  templateUrl: './add-planters.component.html',
  styleUrls: ['./add-planters.component.css']
})
export class AddPlantersComponent implements OnInit {
  model: Planter = new Planter(0,'',0,'',0,0,'',0,'','','',0,0,0);

  constructor(private planterService:PlanterOperationService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.model);
    this.doSaveTOServer();
  }

  doSaveTOServer()
  {
    this.planterService.addPlanter(this.model).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
  }


}
