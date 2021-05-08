import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StructureService {
  host = "http://localhost:8080/struct"
  constructor(public http: HttpClient) { }

  public updateStructure(idStruc, structure) {
    return this.http.post(this.host + "/updateStruc/" + idStruc, structure, { 'responseType': 'text' })
  }

}
