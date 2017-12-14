import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomeComponent } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoot1 = HomeComponent;
  tabRoot2 = HomeComponent;
  tabRoot3 = AboutPage;
  tabRoot4 = ContactPage;

  constructor() {

  }
}
