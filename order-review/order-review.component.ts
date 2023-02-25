import { Component } from '@angular/core';
import { SeedReview } from '../seed-review';
import { SeedReviewOperationService } from '../seed-review-operation.service';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent {
  model: SeedReview = new SeedReview(0,'',0,0,0,'',0);
  submitted = false;
  success = false;
  error = false;
  numberOfStars = [1, 2, 3, 4, 5];
  status = false;
  message = '';
  constructor(private seedReviewOperationService: SeedReviewOperationService) {}

  onSubmit() {
    this.seedReviewOperationService.submitSeedReview(this.model).subscribe(

      data=>{
        this.status=true;
        this.message=" review submitted";

      },
      error=>{
       
      }

    )

    

   
  }
}


