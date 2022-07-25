import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maindiv',
  templateUrl: './maindiv.component.html',
  styleUrls: ['./maindiv.component.scss']
})
export class MaindivComponent implements OnInit {
  searchdivid: string = 'search-div';

  constructor() { }

  ngOnInit(): void {
  }

  ShowSearch() {
    this.searchdivid = 'search-div-eject';
    //var a = document.getElementsByTagName("body")[0];
    //a.style.overflowY = 'hidden';
  }

  HideSearch() {
    this.searchdivid = 'search-div';
    //var a = document.getElementsByTagName("body")[0];
    //a.style.overflowY = 'scroll';
  }
}
