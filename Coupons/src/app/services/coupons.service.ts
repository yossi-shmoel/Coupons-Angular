import { Coupon } from './../models/coupon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  private apiConnection = 'http://localhost:1695/api/'; // TODO: move to higher level
  private apiString = this.apiConnection + 'Coupons/';

  constructor(private httpClient: HttpClient) { }

  public CreateOrUpdate(coupon: Coupon): Observable<Coupon> {
    // POST /api/Coupons/CreateOrUpdate
    return this.httpClient.post<Coupon>(this.apiString + 'CreateOrUpdate', coupon);
  }

  public Get(id: number): Observable<Coupon> {
    // GET /api/Coupons/Get
    return this.httpClient.get<Coupon>(this.apiString + 'Get');
  }

  public GetAll(): Observable<Coupon[]> {
    // GET /api/Coupons/GetAll
    return this.httpClient.get<Coupon[]>(this.apiString + 'GetAll');
  }

  public Delete(id: number): void {
    // DELETE /api/Coupons/Delete
    this.httpClient.delete<void>(this.apiString + 'Delete');
  }

}
