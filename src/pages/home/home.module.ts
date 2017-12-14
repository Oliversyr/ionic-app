import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HomeComponent } from './home'
import { CommonDirectiveModule } from '../../common/directive/common.directive.module';

@NgModule({
    declarations: [ HomeComponent ],
    imports: [ IonicModule, CommonDirectiveModule ],
    exports: [ HomeComponent ],
    providers: [ ]
})

export class HomeModule { }