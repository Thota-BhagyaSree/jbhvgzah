import { Component } from '@angular/core';
import { SeedOperationService } from '../seed-operation.service';
import { Seed } from '../seed';

@Component({
  selector: 'app-add-seed',
  templateUrl: './add-seed.component.html',
  styleUrls: ['./add-seed.component.css']
})
export class AddSeedComponent {
  s: Seed = new Seed('','','',0,0,'','',0,0,0);

  constructor(private seedService:SeedOperationService)
  {
 
  }
  ngOnInit(): void {
    
  }
  onSubmit()
  {
    console.log(this.s);
    this.doSaveTOServer();
  }


  doSaveTOServer()
  {
    this.seedService.addSeed(this.s).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
  }


}
