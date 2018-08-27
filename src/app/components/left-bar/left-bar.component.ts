import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResizeService } from '../../services/resize.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class LeftBarComponent implements OnInit {
  private resizeSubscription: Subscription;
  @Output() public onFilterChange: EventEmitter<any> = new EventEmitter();
  
  @Input() filters;

  starFilter:any = {};
  allChecked = true;
  name: string;
  prevScreenSize = null;
  visibility = {
    allFiltersHidden: false,
    hotelFilterHidden: false,
    starsFilterHidden: false,
  };
  constructor(private resizeService: ResizeService) { }

  ngOnInit() {
    this.starFilter = this.filters.stars;
    this.name = this.filters.name;
    this.checkFiltersVisibility(window.innerWidth);
    this.resizeSubscription = this.resizeService.onResize$.subscribe(win => {
      this.checkFiltersVisibility(win.innerWidth);
    });
  }

  checkFiltersVisibility(innerWidth){
    if(this.prevScreenSize != innerWidth && innerWidth < 992 && this.prevScreenSize >= 992){
      this.visibility.allFiltersHidden = true;
    }else if(this.prevScreenSize != innerWidth && innerWidth >= 992 && this.prevScreenSize < 992){
      this.visibility.allFiltersHidden = false;
    }
    this.prevScreenSize = innerWidth;
  }

  toggleFilters(){
    this.visibility.allFiltersHidden = !this.visibility.allFiltersHidden;
  }
  toggleHotelFilter(){
    this.visibility.hotelFilterHidden = !this.visibility.hotelFilterHidden;
  }
  toggleStarsFilter(){
    this.visibility.starsFilterHidden = !this.visibility.starsFilterHidden;
  }
  
  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  onResize(event){
    event.target.innerWidth; // window width
  }

  nameChanged(){
    this.onFilterChange.emit({filter:'name', newVal: this.name});
  }

  starsChanged(){
    this.onFilterChange.emit({filter:'stars', newVal: this.starFilter});
  }

  areAllChecked(){
    return Object.values(this.starFilter).every(val => !!val);
  }

  allClicked(){
    Object.keys(this.starFilter).forEach( key => {
      this.starFilter[key] = this.allChecked
    });
    this.starsChanged();
  }

  allChange(){
    this.allChecked = this.areAllChecked();
    this.starsChanged();
  }

}
