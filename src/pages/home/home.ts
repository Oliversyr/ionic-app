import { Component, OnInit, AfterViewInit, Directive, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
    /**
     * 主页展示项目
     */
    showKeys: Array<object>;
    /**
     * 主页账目列表
     */
    accountList: Array<object>;

    zDis: string = '54px';

    constructor(public navCtrl: NavController) {

    }

    ngOnInit() {


        this.showKeys = [
            {label: '今日支出', value: 25},
            {label: '今日支出', value: 25},
            {label: '今日支出', value: 25}
        ]

        this.accountList = [
            {label: "item1"},
            {label: "item2"},
            {label: "item3"},
            {label: "item4"}
        ]
    }

    ngAfterViewInit() {
        
    }

    

}


