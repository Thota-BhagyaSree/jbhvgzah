import { Component } from '@angular/core';
import { SeedReviewDto } from '../seed-review-dto';
import { SeedReviewOperationService } from '../seed-review-operation.service';

@Component({
  selector: 'app-all-seed-reviews',
  templateUrl: './all-seed-reviews.component.html',
  styleUrls: ['./all-seed-reviews.component.css']
})
export class AllSeedReviewsComponent {
  allReviews: SeedReviewDto[] = [];
  // allPlant: Array<PlantReview> = [];
 
 
   constructor(private reviewService: SeedReviewOperationService) {
 
     reviewService.getAllreviewsFromSpring().subscribe(
       data => {
         this.allReviews = data;
       },
       error => {
 
 
       }
     );
   }
 


}
