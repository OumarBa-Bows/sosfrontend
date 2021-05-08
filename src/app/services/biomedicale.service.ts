import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BiomedicaleService {

  host = "http://localhost:8080/biomedicale";
  constructor(private http: HttpClient) { }

  public updateBiomedicale(idbio, biomedicale) {
    return this.http.post(this.host + "/updateBio/" + idbio, biomedicale, { 'responseType': 'text' })
  }
}
