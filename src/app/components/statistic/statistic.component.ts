import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  @Input() vins: {name: string; fuel: number}[] = [{name: 'one', fuel: 20}, {name: 'fas', fuel: 50},
    {name: 'odasfne', fuel: 80}];
  constructor() { }

  ngOnInit() {
  }

}
