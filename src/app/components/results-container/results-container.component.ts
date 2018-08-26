import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.scss']
})
export class ResultsContainerComponent implements OnInit {
  @Input('hotels')
  hotels: Array<any>;
  constructor() { }

  ngOnInit() {
  }

  getStarArr(stars){
    return Array(stars);
  }

}
