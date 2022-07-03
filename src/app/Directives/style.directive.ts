import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[StyleDirective]'
})

export class StyleDirective implements OnInit {
    backgroundColor = 'orange';
    @Input() height: string = '0px';
    @Input() width: number = 0;

    constructor(private element: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red');
        //this.renderer.setStyle(this.element.nativeElement, 'height', this.height);
    }
}