import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {
  @Output() public onFilterChange: EventEmitter<any> = new EventEmitter();
  
  @Input() filters;

  starFilter:any = {};
  allChecked = true;
  name: string;
  constructor() { }

  ngOnInit() {
    this.starFilter = this.filters.stars;
    this.name = this.filters.name;
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
