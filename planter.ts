export class Planter {
    planterId:number;
    plantName:string; 
    planterHeight:number;
    planterCategory:string;
    drinageHoles:number;
    planterStock:number;
    planterShape:string;
    planterCost:number;
    typesOfPlanters:string;
    imageName:string;
    about:string;
    discount:number;
    price:number;
    starRating:number;

    

    constructor(
        planterId:number,
    plantName:string,
    planterHeight:number,
    planterCategory:string,
    drinageHoles:number,
    planterStock:number,
    planterShape:string,
    planterCost:number,
    typesOfPlanters:string,
    imageName:string,
    about:string,
    discount:number,
    price:number,
    starRating:number,
    )
    {
          this.planterId = planterId;
          this.plantName = plantName;
          this.planterHeight = planterHeight;
          this.planterCategory = planterCategory;
          this.drinageHoles = drinageHoles;
          this.planterStock = planterStock;
          this.planterShape = planterShape;
          this.planterCost = planterCost;
          this.typesOfPlanters=typesOfPlanters;
          this.imageName = imageName;
          this.about = about;
          this.discount = discount;
          this.price = price;
          this.starRating = starRating;
    }
}
