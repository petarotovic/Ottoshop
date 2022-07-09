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
  }

  HideSearch() {
    this.searchdivid = 'search-div';
  }
}
