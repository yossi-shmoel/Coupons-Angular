export class Coupon {

  public constructor(
      public Name: string,
      public CompanyId: number,
      public Start_Date: Date,
      public End_Date: Date,
      public Amount: number,
      public Type: string,
      public Message: string,
      public Price: number,
      public Image: string,
      public Id?: number
  ) {}
}
