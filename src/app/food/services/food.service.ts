import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) {
  }

  getAll$(): Observable<Food[]> {
    const url = environment.apiUrl + '/food';

    const httpParams = new HttpParams({
      fromObject: {
        _expand: 'category'
      }
    });

    return this.httpClient.get<Food[]>(url, {
      params: httpParams
    });
  }

  getById$(id: number): Observable<Food> {
    const url = `${environment.apiUrl}/food/${id}`;

    const httpParams = new HttpParams({
      fromObject: {
        _expand: 'category'
      }
    });

    return this.httpClient.get<Food>(url, {
      params: httpParams
    });
  }

  save$(food: Food): Observable<Food> {
    if (!food.id) {
      return this.create$(food);
    } else {
      return this.edit$(food);
    }
  }

  create$(food: Food): Observable<Food> {
    const url = environment.apiUrl + '/food';

    food.created = new Date();
    food.lastUpdated = new Date();

    return this.httpClient.post<Food>(url, food);
  }

  edit$(food: Food): Observable<Food> {
    const url = `${environment.apiUrl}/food/${food.id}`;

    food.lastUpdated = new Date();

    return this.httpClient.put<Food>(url, food);
  }

  delete$(id: number): Observable<void> {
    const url = `${environment.apiUrl}/food/${id}`;

    return this.httpClient.delete<void>(url);
  }

}
