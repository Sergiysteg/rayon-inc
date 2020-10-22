import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICloth } from '../interfaces/cloth.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClothService {
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/cloth';
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

  updateJSONCloth(cloth: ICloth): Observable<ICloth> {
    return this.http.put<ICloth>(`${this.url}/${cloth.id}`, cloth);
  }

  getCategoryCloth(name: string): Observable<Array<ICloth>> {
    return this.http.get<Array<ICloth>>(`${this.url}?category.nameEN=${name}`);
  }
  
  getOneCloth(id: number): Observable<ICloth> {
    return this.http.get<ICloth>(`${this.url}/${id}`);
  }
  
}
