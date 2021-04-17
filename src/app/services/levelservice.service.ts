import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Ilevel1 } from '../level/Ilvel1';

@Injectable({
  providedIn: 'root'
})
export class LevelserviceService {

  constructor(private http: HttpClient) { }

  public alllevels(): Observable<Ilevel1[]>{
    return this.http.get<Ilevel1[]>("http://localhost:8080/levels/all");
  }

  public levleslines(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/alllevels/levels");
  }

}
