import { BaseService } from './base.service';
import { Coupon } from './../models/coupon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  private apiPath = 'Coupons/';

  constructor(private httpClient: HttpClient, private baseService: BaseService) { }

  public CreateOrUpdate(coupon: Coupon): Observable<Coupon> {
    return this.baseService.CreateOrUpdate(this.apiPath, coupon);
  }

  public Get(couponId: number): Observable<Coupon> {
    return this.baseService.GetObject(this.apiPath, couponId);
  }

  public GetAll(): Observable<Coupon[]> {
    return this.baseService.GetAllObjects(this.apiPath);
  }

  public Delete(couponId: number): void {
    return this.baseService.DeleteObject(this.apiPath, couponId);
  }
}
