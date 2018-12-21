import { BaseService } from './base.service';
import { UserCoupoonSetter } from './../models/userCouponSetter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiPath = 'User/';

  constructor(private httpClient: HttpClient,
    private baseService: BaseService) { }

  public CreateOrUpdate(user: User): Observable<User> {
    return this.baseService.CreateOrUpdate(this.apiPath, user);
  }

  public Get(userId: number): Observable<User> {
    return this.baseService.GetObject(this.apiPath, userId);
  }

  public GetAll(): Observable<User[]> {
    return this.baseService.GetAllObjects(this.apiPath);
  }

  public Delete(userId: number): void {
    return this.baseService.DeleteObject(this.apiPath, userId);
  }

  public SetUserCoupon(data: UserCoupoonSetter): void {
    // POST /api/User/SetCouponToUser
    this.httpClient.post<UserCoupoonSetter>(
      this.baseService.apiConnection + this.apiPath + 'SetCouponToUser', data);
  }

}
