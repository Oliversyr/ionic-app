import { Component, OnInit, AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[act-shake]'
})

export class ActShake {


    constructor(private el: ElementRef) {
        
    }

    ngAfterViewInit() {
            // let needHeight = this.el.nativeElement.clientHeight;
            // this.el.nativeElement.style.transform = `rotateX(-90deg) translateY(50%) translateZ(${needHeight/2}px)`;
    }

    @HostListener('mousemove', ['$event', '$event.target'])
    onmousemove(event, ele) {
        console.log(event);
        let maxDegX = 10;
        let maxDegY = 10;

        let centerX = ele.offsetLeft + ele.clientWidth/2;
        let centerY = ele.offsetTop + ele.clientHeight/2;

        let mouseX = event.clientX;
        let mouseY = event.clientY;

        let shakeX = mouseX - centerX;
        let shakeY = mouseY - centerY;

        let realDegX = shakeX * maxDegX / (ele.clientWidth/2);
        let realDegY = shakeY * maxDegY / (ele.clientHeight/2);

        console.log(shakeX, shakeY)
        console.log(realDegX, realDegY)

        this.el.nativeElement.style.transform = `rotateX(${-realDegY}deg) rotateY(${realDegX}deg) rotateZ(0deg)`;

        console.log(this.el.nativeElement.offset);
        this.el.nativeElement.classList.add('panel');
    }

    // @HostListener('mouseover', ['$event', '$event.target'])
    // onMouseOver(event, ele) {

        
    //     console.log(event);
        
    //     // let needHeight = this.el.nativeElement.clientHeight;
    //     // this.el.nativeElement.style.transform = `rotateX(90deg) translateY(-50%) translateZ(${needHeight/2}px)`;
    // }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.el.nativeElement.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        this.el.nativeElement.classList.remove('panel');
    }

}