import { Injectable } from '@angular/core';
import { Seed } from './seed';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeedDto } from './seed-dto';

@Injectable({
  providedIn: 'root'
})
export class SeedOperationService {
  baseURL = 'http://localhost:6001';

  allSeedEndPoint = this.baseURL + '/seed/seeds';
  addSeedEndPoint = this.baseURL + '/seed/add';
  addSeedNameEndpoint = this.baseURL + '/seed/getseeds';
  addSeedByTypeEndPoint = this.baseURL + '/seed/showseedslist';

  seedArr: Seed[] = [];

  constructor(private http: HttpClient) { 
    console.log("Inside Constructor" + this.allSeedEndPoint);
  }
  getAllSeedsFromSpring(): Observable<SeedDto[]> {
    console.log("inside service : " + this.allSeedEndPoint);
    return this.http.get<SeedDto[]>(`${this.allSeedEndPoint}`);
  }

  addSeed(seed: Seed): Observable<Seed[]> {
    console.log('Seed Service - add Seed called');
    return this.http.post<Seed[]>(`${this.addSeedEndPoint}`, seed);

  }

  getSeedArr(): Seed[] {
    return this.seedArr;
  }

  getSeedsByStock(filterSeedsStock: number): Seed[] {
    let outputArr: Seed[] = [];

    this.seedArr.forEach(s => {
      if (s.seedsStock == filterSeedsStock) {
        outputArr.push(s);
      }
    });

    return outputArr;
  }

  getSeedsPerPacket(filterSeedsPerPacket: number): Seed[] {
    let outputArr: Seed[] = [];

    this.seedArr.forEach(s => {
      if (s.seedsPerPacket == filterSeedsPerPacket) {
        outputArr.push(s);
      }
    });

    return outputArr;
  }

  getSeedByBloomSeason(filterBloomSeason: string): Seed[] {
    let outputArr: Seed[] = [];
    this.seedArr.forEach(s => {
      if (s.bloomSeason == filterBloomSeason) {
        outputArr.push(s);
      }
    });

    return outputArr;
  }

  getSeedsByTypesOfSeeds(filterTypesOfSeeds: string): Seed[] {
    let outputArr: Seed[] = [];

    this.seedArr.forEach(s => {
      if (s.typesOfSeeds == filterTypesOfSeeds) {
        outputArr.push(s);
      }
    });

    return outputArr;
  }

  getSeedByStarRating(filterStarRating: number): Seed[] {

    let outputArr: Seed[] = [];

    this.seedArr.forEach(s => {
      if (s.starRating == filterStarRating) {
        outputArr.push(s);
      }
    });

    return outputArr;
  }

  getDetailsBySeedName(seedName: string): Observable<SeedDto[]> {
    console.log('Seed Service - get Seed called');
    this.addSeedNameEndpoint = this.addSeedNameEndpoint + '/' + seedName;

    return this.http.get<SeedDto[]>(`${this.addSeedNameEndpoint}`);

  }

  getDetailsBySeedType(typesOfSeeds: string): Observable<SeedDto[]> {
    console.log('Seed Service - get Seed called');
    this.addSeedByTypeEndPoint = this.addSeedByTypeEndPoint + '/' + typesOfSeeds;

    return this.http.get<SeedDto[]>(`${this.addSeedByTypeEndPoint}`);

  
  }
}
