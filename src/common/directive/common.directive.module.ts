import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { ActOffset } from './act-3d-offset/act-offset';
import { ActShake } from './act-3d-offset/act-shake';

@NgModule({
    declarations: [ ActOffset, ActShake ],
    imports: [ IonicModule ],
    exports: [ ActOffset, ActShake ],
    providers: [ ]
})

export class CommonDirectiveModule { }