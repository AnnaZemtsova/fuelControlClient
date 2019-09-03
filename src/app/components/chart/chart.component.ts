import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  @Input() times = ['1', '2', '3', '4', '5', '6', '7'];
  public barChartType = 'bar';
  public barChartLegend = true;
  @Input() barChartData: [{data: number[], label: string}] = [
    {data: [0.23, 0.59, 0.80, 0.81, 0.56, 0.55, 0.40], label: 'Fuel level'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
