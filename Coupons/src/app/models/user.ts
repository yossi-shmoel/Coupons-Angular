export class User {

  public constructor(
      public name: string,
      public email: string,
      public type: string,
      public companyId: number,
      public token?: string,
      public id?: number
  ) {}
}
