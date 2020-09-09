import { Component } from "@angular/core";

@Component({
  selector: "app-tabs-sibling-root",
  templateUrl: "tabs-sibling-root.page.html",
  styleUrls: ["./tabs-sibling-root.page.scss"],
})
export class TabsSiblingRootPage {
  constructor() {}

  ionViewWillEnter() {
    console.log("ionViewWillEnter: Tab Sibling Root Page");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave: Tab Sibling Root Page");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave: Tab Sibling Root Page");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter: Tab Sibling Root Page");
  }

  navigateToTabs;
}
