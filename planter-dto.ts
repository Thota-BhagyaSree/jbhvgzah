export class PlanterDto {
    planterId:number;
    plantName:string;
	planterHeight:number;
	planterCapacity:number;
	drinageHoles:number;
	planterShape:string;
	planterStock:number;
	planterCost:number;
   typesOfPlanters:string;
    imageName:string;
    about:string;
    discount:number;
    price:number;
    starRating:number;
	

     constructor(
        planterId:number,
	planterHeight:number,
	planterCapacity:number,
	drinageHoles:number,
	planterShape:string,
	planterStock:number,
	planterCost:number,
	plantName:string,
   typesOfPlanters:string,
    imageName:string,
    about:string,
    discount:number,
    price:number,
    starRating:number

     )

     {
        this.planterId=planterId;
        this.planterHeight=planterHeight;
        this.planterCapacity=planterCapacity;
        this.drinageHoles=drinageHoles;
        this.planterShape=planterShape;
        this.planterStock=planterStock;
        this.planterCost=planterCost;
        this.plantName=plantName;
        this.typesOfPlanters=typesOfPlanters;
        this.imageName = imageName;
        this.about = about;
        this.discount = discount;
        this.price = price;
        this.starRating = starRating;
     }
}
