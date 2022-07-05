import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[SizeDirective]'
})

//This directive is used to asign div's height and width
//some components will be used many times and sometimes they need to have different size
//In this component i can pass height, width and margin and assign it to some component to apply those values

export class SizeDirective implements OnInit {
    @Input() height: string = '0px';
    @Input() width: string = '0px';
    @Input() margin: string = '0px';

    constructor(private element: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        this.renderer.setStyle(this.element.nativeElement, 'height', this.height);
        this.renderer.setStyle(this.element.nativeElement, 'width', this.width);
    }
}