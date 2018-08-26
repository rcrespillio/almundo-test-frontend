import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { promise } from 'protractor';
const starMap = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
}
@Injectable({
  providedIn: 'root'
})
export class HotelsProviderService {

  constructor(private DatabaseService:DatabaseService) {

  }

  getHotels(filters): Promise<any>{
    let nameSearch = filters.name;
    let starsSel = Object.entries(filters.stars).filter( ([key, val])=> val).map(([key, val])=>starMap[key]);
    if(!starsSel.length){
      return Promise.resolve([]);
    }
    return this.DatabaseService.getHotels(nameSearch,starsSel.join(','));
  }
}
