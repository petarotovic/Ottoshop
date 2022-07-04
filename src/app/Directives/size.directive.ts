import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[SizeDirective]'
})

export class SizeDirective implements OnInit {
    @Input() height: string = '0px';
    @Input() width: string = '0px';
    @Input() margin: string = '0px';

    constructor(private element: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        this.renderer.setStyle(this.element.nativeElement, 'height', this.height);
        this.renderer.setStyle(this.element.nativeElement, 'width', this.width);
        this.renderer.setStyle(this.element.nativeElement, 'margin', this.margin);
    }
}