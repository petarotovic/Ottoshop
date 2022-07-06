import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-div-image-generator',
  templateUrl: './div-image-generator.component.html',
  styleUrls: ['./div-image-generator.component.scss']
})
export class DivImageGeneratorComponent implements OnInit {
  @Input() imgpath: string = '';
  @Input() classid: string = '';
  @Input() margin: boolean = false;
  @Input() marsum: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

}
