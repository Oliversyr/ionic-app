import { Component, OnInit, AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[act-offset]'
})

export class ActOffset {
    @Input('act-offset') elObj: string;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        if(this.elObj === 'back') {
            let needHeight = this.el.nativeElement.clientHeight;
            this.el.nativeElement.style.transform = `rotateX(-90deg) translateY(50%) translateZ(${needHeight/2}px)`;
        }
    }

    @HostListener('mouseover')
    onMouseOver() {
        if(this.elObj === 'layer') {
            let needHeight = this.el.nativeElement.clientHeight;
            this.el.nativeElement.style.transform = `rotateX(90deg) translateY(-50%) translateZ(${needHeight/2}px)`;
        }
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        if(this.elObj === 'layer') {
            let needHeight = this.el.nativeElement.clientHeight;
            this.el.nativeElement.style.transform = `rotateX(0deg) translateY(0) translateZ(0px)`;
        }
    }

}