export class WatchModel {
   

    constructor(
        public brand: string, 
        public year: number,
        public model: {
            nameModel: string,
            referenceNUmber: number,
            condition: string,
            scopeDelivery: string,
            price: number,
            allowPrice: boolean,
            description: string,
            gender: string,
            movement: string,
            caseMarerail: string,
            caseDaimeter:{
                mm: number,
                mm1: number
            }
        } ){}
}