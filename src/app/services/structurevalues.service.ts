import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StructurevaluesService {

  host = "http://localhost:8080/structurellevalues"
  constructor(private http: HttpClient) { }

  public ListStructurelleValue(idLevel): Observable<any> {
    return this.http.get<any>(this.host + "/Listvalues/" + idLevel);
  }

  public findByIdStruc(idStruc): Observable<any> {
    return this.http.get<any>(this.host + "/findById/" + idStruc);
  }
}
