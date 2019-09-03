import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-drawer-mini',
  templateUrl: './nav-drawer-mini.component.html',
  styleUrls: ['./nav-drawer-mini.component.scss']
})
export class NavDrawerMiniComponent implements OnInit {
  statisticOpen: boolean;
  chartOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.statisticOpen = true;
  }

  statistic() {
     this.chartOpen = false;
     this.statisticOpen = true;
  }

  chart() {
    this.statisticOpen = false;
    this.chartOpen = true;
  }

}
