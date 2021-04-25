import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationServiceI } from './application.serviceI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  getApplications(endPoint: string): Observable<ApplicationServiceI> {
    return this.http.get<ApplicationServiceI>(endPoint + 'applications', {});
  }

}
