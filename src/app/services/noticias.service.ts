import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros:any): Observable<any>{

    const url = 'https://newsapi.org/v2/top-headlines?country='
    + parametros.pais +'&category='
    + parametros.categoria +'&apiKey=f5a9c9e63ef243529252725ac0f86be1'
     return this.http.get(url);
  }
}
