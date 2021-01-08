import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/';
  }

  public saveUserDetails(userDetails: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'users', userDetails);
  }
  public getUserList(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'users');
  }

  public updateUserDetails(id: number, userDetails: any): Observable<any> {
    return this.httpClient.patch(this.baseUrl + 'users/' + id, userDetails);
  }
  public deleteUserDetails(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + 'users/' + id,);
  }
  public getSingleUser(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'users/' + id);
  }
}
