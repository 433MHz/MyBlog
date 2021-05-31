import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-boxes',
  templateUrl: './technology-boxes.component.html',
  styleUrls: ['./technology-boxes.component.css']
})
export class TechnologyBoxesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentDetailNumber: number = 0;

  changeDetailNumber(num){
    this.currentDetailNumber = num;
  }

}
