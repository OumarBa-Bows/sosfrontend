import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class LocalisationService {
  host = "http://localhost:8080/localisation"
  constructor(private http: HttpClient) { }

  public upadateLocalisation(id, loacalisation) {
    return this.http.post(this.host + "/upadate/" + id, loacalisation, { 'responseType': 'text' });
  }

  public findById(id): Observable<any> {
    return this.http.get<any>(this.host + "/findById/" + id);
  }
}
