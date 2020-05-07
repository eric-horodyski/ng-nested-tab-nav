import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-sibling-root',
  templateUrl: 'tabs-sibling-root.page.html',
  styleUrls: ['./tabs-sibling-root.page.scss']
})
export class TabsSiblingRootPage {

  constructor() { }

  ionViewWillEnter() {
    console.log('ionViewWillEnter: TabsSiblingRootPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave: TabsSiblingRootPage');
  }

  navigateToTabs

}
