export class Seed {
    seedName: string;
    bloomSeason: string;
    typesOfSeeds: string;
    seedsStock: number;
    seedsPerPacket: number;
    image: string;
    about: string;
    discount: number;
    price: number;
    starRating: number;

    constructor(

        seedName: string,
        bloomSeason: string,
        typesOfSeeds: string,
        seedsStock: number,
        seedsPerPacket: number,
        image: string,
        about: string,
        discount: number,
        price: number,
        starRating: number
    ) {

        this.seedName = seedName;
        this.bloomSeason = bloomSeason;
        this.typesOfSeeds = typesOfSeeds;
        this.seedsStock = seedsStock;
        this.seedsPerPacket = seedsPerPacket;
        this.image = image;
        this.about = about;
        this.discount = discount;
        this.price = price;
        this.starRating = starRating;
    }
}
