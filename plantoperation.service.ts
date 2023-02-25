import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plantdto } from './plantdto';


@Injectable({
  providedIn: 'root'
})
export class PlantoperationService {
  baseURL:string = 'http://localhost:6001/plant';

  allPlantEndPoint = this.baseURL+'/showplants';
  addPlantEndPoint = this.baseURL+'/add';
  addTypeOfPlantEndPoint = this.baseURL+'/showplantslist';

  plantArr:Plant[] = [];

  constructor(private http:HttpClient) { 
    console.log("Inside Constructor "+this.allPlantEndPoint);
  }
  getAllPlantsFromSpring():Observable<Plantdto[]>
  {
    console.log("inside service : "+this.allPlantEndPoint);
    return this.http.get<Plantdto[]>(`${this.allPlantEndPoint}`);
  }
    
  addPlant(plant:Plant):Observable<Object>
  {
    console.log('Plant Service - add Plant called');
    return this.http.post<Plant>(`${this.addPlantEndPoint}`,plant);
    
  }
  addPlant1(plantFromUser:Plant)
  {
    
    this.plantArr.push(plantFromUser); 
    console.log("Inside Plant Service : Plant Added "+plantFromUser.plantId);
    console.log(" Total Plants Are :- "+this.plantArr.length);
    
  }
  getPlantByNumber(searchPlantId:number):Plant
  {
    let outputPlant:Plant = new Plant(0,'',0,'','','',0,0,0,'');
    for(let i=0;i<this.plantArr.length;i++)
    {
      let thisPlant:Plant = this.plantArr[i];
        if(thisPlant.plantId == searchPlantId)
        {
          outputPlant = thisPlant;
          break;
        }
    }
    
    return outputPlant;
  }

  getPlantArr():Plant[]
  {
    return this.plantArr;
  }

  getPlantsByTypeOfPlant(filterTypeOfPlant:string):Plant[]
  {
    // localhost:8080/api/planter/{category}
   let outputArr:Plant[] = [];

    this.plantArr.forEach(p=>{
      if(p.typeOfPlant == filterTypeOfPlant)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  getPlantsByStarRating(filterStarRating:number):Plant[]
  {
    // localhost:8080/api/planter/{rating}
   let outputArr:Plant[] = [];

    this.plantArr.forEach(p=>{
      if(p.starRating == filterStarRating)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  getPlantsByBloomSeason(filterBloomSeason:string):Plant[]
  {
    console.log("bloomSeason inside service "+ filterBloomSeason);
    // localhost:8080/api/plant/{bloom}
   let outputArr:Plant[] = [];

    this.plantArr.forEach(p=>{
      if(p.bloomSeason == filterBloomSeason)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  
  getDetailsByTypeOfPlant(TypeOfPlant: string): Observable<Plantdto[]> {
    console.log('Plant Service - get Plant called');
    this. addTypeOfPlantEndPoint= this. addTypeOfPlantEndPoint + '/' +TypeOfPlant;

    return this.http.get<Plantdto[]>(`${this. addTypeOfPlantEndPoint}`);

}
}

