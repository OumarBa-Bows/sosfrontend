import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Level1Service {
  host = "http://localhost:8080/levels"
  constructor(private http: HttpClient) { }

  public update(id, level) {
    return this.http.post(this.host + "/update/" + id, level, { 'responseType': 'text' })
  }
}
