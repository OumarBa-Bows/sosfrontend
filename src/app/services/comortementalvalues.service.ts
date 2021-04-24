import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComortementalvaluesService {

  host = "http://localhost:8080/comportementalVal";

  constructor(private http: HttpClient) { }

  //............;list des valeurs d'action comportementale................
  public listcomportementalevalue(idlevel): Observable<any>{
    return this.http.get<any>(this.host+"/listcomportementalevalue/"+idlevel);
  }
}
