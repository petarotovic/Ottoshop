import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stripetitle',
  templateUrl: './stripetitle.component.html',
  styleUrls: ['./stripetitle.component.scss']
})
export class StripetitleComponent implements OnInit {
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
