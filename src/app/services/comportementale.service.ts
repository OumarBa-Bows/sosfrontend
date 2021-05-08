import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComportementaleService {
  host = "http://localhost:8080/comportementales";

  constructor(public http: HttpClient) { }

  public finById(idcomp): Observable<any>{
    return this.http.get<any>(this.host+"/findByid/"+idcomp);
  }

  public updateComportemetale(id, comportementale) {
    return this.http.post(this.host+"/updateComportementale/"+id, comportementale, {'responseType': 'text'});
  }
}