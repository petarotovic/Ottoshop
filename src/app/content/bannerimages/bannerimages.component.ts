import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bannerimages',
  templateUrl: './bannerimages.component.html',
  styleUrls: ['./bannerimages.component.scss']
})
export class BannerimagesComponent implements OnInit {
  @Input() imgsrc: string = '';

  imgsrcarray = [
    {
      id: '1',
      link: ''
    },
    {
      id: '2',
      link: ''
    }
  ];
  imgid: number = 0;
  timeout: any;

  constructor() { }

  ngOnInit(): void {
    this.StartTimer();
  }

  IncreaseIndex() {
    if(this.imgid + 1 > this.imgsrcarray.length - 1) {
      this.imgid = 0;
    } else {
      this.imgid++;
    }
    window.clearTimeout(this.timeout);
    this.StartTimer();
  }

  DecreaseIndex() {
    if(this.imgid - 1 < 0) {
      this.imgid = this.imgsrcarray.length - 1;
    } else {
      this.imgid--;
    }
    window.clearTimeout(this.timeout);
    this.StartTimer();
  }

  StartTimer() {
    this.timeout = setInterval(() => {
      if(this.imgid + 1 > this.imgsrcarray.length - 1) {
        this.imgid = 0;
        console.log(this.imgid)
      } else {
        this.imgid++;
        console.log(this.imgid)
      }
    }, 8000)
  }
}
