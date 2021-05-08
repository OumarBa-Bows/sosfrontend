import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfInterventionService {
  host = "http://localhost:8080/infintervenant"
  constructor(private http: HttpClient) { }

  public updateInfIntervenant(id, inf_intervenant) {
    return this.http.post(this.host + "/update/" + id, inf_intervenant, { 'responseType': 'text' })
  }
}
