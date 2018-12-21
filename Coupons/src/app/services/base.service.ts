import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public apiConnection = 'http://localhost:1695/api/'; // TODO: move to config

  constructor(private httpClient: HttpClient) { }

  public CreateOrUpdate<T>(objectPath: string, dataObject: T): Observable<T> {
    return this.httpClient.post<T>(this.apiConnection + objectPath + 'CreateOrUpdate', dataObject);
  }

  public GetObject<T>(objectPath: string, dataId: number): Observable<T> {
    // TODO: Solve Contract issues with API currently <object>Id change to > id
    return this.httpClient.get<T>(this.apiConnection + objectPath + 'Get?id=' + dataId);
  }

  public GetAllObjects<T>( objectPath: string): Observable<T> {
    return this.httpClient.get<T>(this.apiConnection + objectPath + 'GetAll');
  }

  public DeleteObject(objectPath: string, dataId: number): void {
    // TODO: Solve Contract issues with API currently <object>Id change to > id
    this.httpClient.delete<void>(this.apiConnection + objectPath + 'Delete?id=' + dataId);
  }

}
