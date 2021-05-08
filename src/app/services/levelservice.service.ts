import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ilevel1 } from '../level/Ilvel1';

@Injectable({
  providedIn: 'root'
})
export class LevelserviceService {

  host = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public alllevels(): Observable<Ilevel1[]> {
    return this.http.get<Ilevel1[]>("http://localhost:8080/levels/all");
  }

  public levleslines(): Observable<any> {
    return this.http.get<any>(this.host + "/alllevels/levels");
  }

  public findByid(idlevel): Observable<Ilevel1> {
    return this.http.get<Ilevel1>(this.host + "/levels/findById/" + idlevel);
  }

  //...........list des valeurs d'intification.............................
  public getIdentification(idlevel): Observable<any> {
    return this.http.get<any>(this.host + "/indentPersonnelle/getIdentification/" + idlevel);
  }



  ///............recherche all levels par dates dans une intervalle.......
  public rechercheParDates(startdate, enddate): Observable<any> {
    return this.http.get<any>(this.host + "/alllevels/findByDate/" + startdate + "/" + startdate);
  }

  public update(id, level) {
    return this.http.post(this.host + "/levels/update/" + id, level, { 'responseType': 'text' })
  }

  public findByIdLevel(id): Observable<any> {
    return this.http.get<any>(this.host + "/alllevels/findByLevelId/" + id);
  }
}
