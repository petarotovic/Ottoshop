import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-link-generator',
  templateUrl: './menu-link-generator.component.html',
  styleUrls: ['./menu-link-generator.component.scss']
})
export class MenuLinkGeneratorComponent implements OnInit {
  @Input() linktext: string = '';
  @Input() bold: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
