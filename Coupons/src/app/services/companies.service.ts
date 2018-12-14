import { Observable } from 'rxjs';
import { Company } from './../models/company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private apiConnection = 'http://localhost:1695/api/'; // TODO: move to higher level
  private apiString = this.apiConnection + 'Companies/';

  constructor(private httpClient: HttpClient) { }

  public CreateOrUpdate(company: Company): Observable<Company> {
    // POST /api/Companies/CreateOrUpdate
    return this.httpClient.post<Company>(this.apiString + 'CreateOrUpdate', company);
  }

  public Get(id: number): Observable<Company> {
    // GET /api/Companies/Get
    return this.httpClient.get<Company>(this.apiString + 'Get');
  }

  public GetAll(): Observable<Company[]> {
    // GET /api/Companies/GetAll
    return this.httpClient.get<Company[]>(this.apiString + 'GetAll');
  }

  public Delete(id: number): void {
    // DELETE /api/Coupons/Delete
    this.httpClient.delete<void>(this.apiString + 'Delete');
  }

  // DELETE /api/Companies/Delete
}
