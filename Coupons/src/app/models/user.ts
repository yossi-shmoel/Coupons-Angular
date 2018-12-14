export class User {

  public constructor(
      public Name: string,
      public Email: string,
      public Type: string,
      public CompanyId: number,
      public Token?: string,
      public Id?: number
  ) {}
}
