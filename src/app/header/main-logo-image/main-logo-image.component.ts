import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-logo-image',
  templateUrl: './main-logo-image.component.html',
  styleUrls: ['./main-logo-image.component.scss']
})
export class MainLogoImageComponent implements OnInit {
  @Input() imgsrc: string = '';
  @Input() imgheight: string = '';
  @Input() imgwidth: string = '';
  @Input() imgmargin: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
