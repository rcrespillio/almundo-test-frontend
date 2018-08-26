import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import apiServices from '../../definitions/api.services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) {
    
  }

  getHotels(name, stars): Promise<any>{
    let url = `${environment.apiURL}${apiServices.hotels.getAll}?name=${name}&stars=${stars}`;
    return this.http.get(url)
      .toPromise()
      .then( res => { // Success
        return res;
      })
  }
}
