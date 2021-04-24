import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BiomedicalevaluesService {

  host = "http://localhost:8080/biomedicalevalues";

  constructor(private http: HttpClient) { }

  public listBiomedicaleVlues(idLevle): Observable<any>{
    return this.http.get<any>(this.host+"/list/"+idLevle);
  }

}
