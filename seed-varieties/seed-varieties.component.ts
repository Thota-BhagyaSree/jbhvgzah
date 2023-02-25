import { Component } from '@angular/core';
import { Seed } from '../seed';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SeedOperationService } from '../seed-operation.service';

@Component({
  selector: 'app-seed-varieties',
  templateUrl: './seed-varieties.component.html',
  styleUrls: ['./seed-varieties.component.css']
})
export class SeedVarietiesComponent {
  __seedService: SeedOperationService;
  router: Router;
  allSeeds: Seed[] = [];

  constructor(private seedService: SeedOperationService, router: Router) {
    this.__seedService = seedService;
    this.router = router;
    seedService.getAllSeedsFromSpring().subscribe(
      data => {
        this.allSeeds = data;
      },
      err => {
        console.log("Error" + err);

      }
    );
  }

  viewSeedDetails(seedName: string, bloomSeason: string, typesOfSeeds: string, seedsStock: number, seedsPerPacket: number, about: string, discount: number, image: string, starRating: number, price: number) {
    localStorage.removeItem('seedName')
    localStorage.removeItem('bloomSeason')
    localStorage.removeItem('typesOfSeeds')
    localStorage.removeItem('seedsStock')
    localStorage.removeItem('seedsPerPacket')
    localStorage.removeItem('about')
    localStorage.removeItem('discount')
    localStorage.removeItem('image')
    localStorage.removeItem('starRating')
    localStorage.removeItem('price')

    localStorage.setItem("seedName", seedName + '');
    localStorage.setItem("bloomSeason", bloomSeason + '');
    localStorage.setItem("typesOfSeeds", typesOfSeeds + '');
    localStorage.setItem("seedsStock", seedsStock + '');
    localStorage.setItem("seedsPerPacket", seedsPerPacket + '');
    localStorage.setItem("about", about + '');
    localStorage.setItem("discount", discount + '');
    localStorage.setItem("image", image + '');
    localStorage.setItem("starRating", starRating + '');
    localStorage.setItem("price", price + '');
    this.router.navigate(['seedDetails']);
  }
  addOrder()
  {
    
    this.router.navigate(['addOrder']);
  }

}
