import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() imgsrc: string = '';
  @Input() height: string = '';
  @Input() width: string = '';
  @Input() leftmargin: string = '';
  @Input() anchor: boolean = true;
  @Input() rightmargin: string = '';

  constructor() { }

  ngOnInit(): void {

  }

}
