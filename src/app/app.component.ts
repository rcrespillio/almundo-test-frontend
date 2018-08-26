import { Component, OnInit } from '@angular/core';
import { HotelsProviderService } from './services/hotels.provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  hotels: Array<any>;
  filters = {
    name: '',
    stars: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: true
    }
  } 
  constructor(private HotelsProviderService:HotelsProviderService){
    
  }

  ngOnInit(){
    this.HotelsProviderService.getHotels(this.filters).then( hotels=>{
      this.hotels = hotels;
    }).catch( error => {
      console.error('error', error);
    })
  }

  updateFilter({filter, newVal}){
    this.filters[filter] = newVal;
    this.HotelsProviderService.getHotels(this.filters).then( hotels=>{
      this.hotels = hotels;
    }).catch( error => {
      console.error('error', error);
    })
  }
}
