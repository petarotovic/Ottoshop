import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header-div',
  templateUrl: './main-header-div.component.html',
  styleUrls: ['./main-header-div.component.scss']
})
export class MainHeaderDivComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loga() {
    console.log('Ovo');
  }
}
