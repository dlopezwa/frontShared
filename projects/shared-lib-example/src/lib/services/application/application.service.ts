import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApplicationServiceI } from './application.serviceI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  // Define the url service.
  urlService: string = environment.APIEndPoint;

  constructor(private http: HttpClient) { }

  getApplications(): Observable<ApplicationServiceI> {
    return this.http.get<ApplicationServiceI>(this.urlService + 'applications', {});
  }

}
