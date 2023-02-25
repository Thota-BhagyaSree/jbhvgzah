import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SeedDto } from '../seed-dto';
import { SeedReviewDto } from '../seed-review-dto';
import { SeedReviewOperationService } from '../seed-review-operation.service';

@Component({
  selector: 'app-seed-review',
  templateUrl: './seed-review.component.html',
  styleUrls: ['./seed-review.component.css']
})
export class SeedReviewComponent {
  router: Router ;
//   allSeeds: SeedDto[] = [];
//   allReviews: SeedReviewDto [] = [];
//   a=0;
//   reviewForSeed=0;
//   showReview: boolean=false;
//   constructor(private seedReviewOperationService: SeedReviewOperationService){}
//  
__ReviewService:SeedReviewOperationService;
review:SeedReviewDto[]=[];
id2:number=0;

constructor(__ReviewService:SeedReviewOperationService,router: Router){
  this.__ReviewService=__ReviewService;
  this.router=router;
}

viewAllSeedsByName(id:string){
  
  this.id2=1;
  this.__ReviewService.getReviewsBySeedId(this.id2).subscribe(
    data=>{
     console.log("data:-"+data);
     this.review=data;
     
    },err=>{
     console.log("error from spring",err);

     this.router.navigate(['allReviews']);
     
    }
 )

  }
}
