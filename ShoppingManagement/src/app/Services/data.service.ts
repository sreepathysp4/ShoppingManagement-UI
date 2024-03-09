import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getProducts() : Observable<any>{
    return this.http.get<any>("https://localhost:44322/api/Products");  
  }
}
