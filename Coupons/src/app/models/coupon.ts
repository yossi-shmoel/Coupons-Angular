export class Coupon {

  public constructor(

      public name: string,
      public companyId: number,
      public startDate: Date,
      public endDate: Date,
      public amount: number,
      public type: string,
      public message: string,
      public price: number,
      public image: string,
      public id?: number
  ) {}
}
