import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor() {}

  ionViewWillEnter() {
    console.log("ionViewWillEnter: Tab2");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave: Tab2");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave: Tab2");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter: Tab2");
  }
}
