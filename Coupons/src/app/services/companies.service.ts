import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Company } from './../models/company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  // Obselete see users service

  private apiPath = 'Companies/';

  constructor(private httpClient: HttpClient,
    private baseService: BaseService) { }

  public CreateOrUpdate(company: Company): Observable<Company> {
    return this.baseService.CreateOrUpdate(this.apiPath, company);
  }

  public Get(companyId: number): Observable<Company> {
    return this.baseService.GetObject(this.apiPath, companyId);
  }

  public GetAll(): Observable<Company[]> {
    return this.baseService.GetAllObjects(this.apiPath);
  }

  public Delete(companyId: number): void {
    return this.baseService.DeleteObject(this.apiPath, companyId);
  }

}
