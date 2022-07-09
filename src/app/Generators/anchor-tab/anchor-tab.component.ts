import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anchor-tab',
  templateUrl: './anchor-tab.component.html',
  styleUrls: ['./anchor-tab.component.scss']
})
export class AnchorTabComponent implements OnInit {
  @Input() tabtext: string = '';
  @Input() id: string = '';
  @Input() bold: boolean = false;
  @Input() border: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
