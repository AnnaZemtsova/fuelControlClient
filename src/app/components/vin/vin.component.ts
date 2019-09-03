import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vin',
  templateUrl: './vin.component.html',
  styleUrls: ['./vin.component.css']
})
export class VinComponent implements OnInit {
   @Input() vin;
  constructor() { }

  ngOnInit() {
  }

}
