import { UserCoupoonSetter } from './../models/userCouponSetter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiConnection = 'http://localhost:1695/api/'; // TODO: move to higher level
  private apiString = this.apiConnection + 'User/' ;

  constructor(private httpClient: HttpClient) { }

  public CreateOrUpdate(user: User): Observable<User> {
    // CreateOrUpdate
    return this.httpClient.post<User>(this.apiString + 'CreateOrUpdate', user);
  }

  public GetUser(id: number): Observable<User> {
    // http://localhost:1695/api/User/Get?userId=1
    return this.httpClient.get<User>(this.apiString + 'Get?userId=' + id);
  }

  public GetAllUsers(): Observable<User[]> {
    // http://localhost:1695/api/User/GetAll
    return this.httpClient.get<User[]>(this.apiString + 'GetAll');
  }

  public DeleteUser(): void {
    // DELETE /api/User/Delete
    this.httpClient.delete<void>(this.apiString + 'Delete');
  }

  public SetUserCoupon(data: UserCoupoonSetter): void {
    // POST /api/User/SetCouponToUser
    this.httpClient.post<UserCoupoonSetter>(this.apiString + 'SetCouponToUser', data);
  }
}
