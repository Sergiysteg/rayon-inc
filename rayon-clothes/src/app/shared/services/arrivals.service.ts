import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICloth } from '../interfaces/cloth.interface';

@Injectable({
  providedIn: 'root'
})
export class ArrivalsService {
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/arrivals';
  }

  getJSONCloth(): Observable<Array<ICloth>> {
    return this.http.get<Array<ICloth>>(this.url);
  }

  postJSONCloth(cloth: ICloth): Observable<ICloth> {
    return this.http.post<ICloth>(this.url, cloth);
  }

  deleteJSONCloth(id: number): Observable<ICloth> {
    return this.http.delete<ICloth>(`${this.url}/${id}`);
  }
}
