import { Component } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.page.html",
  styleUrls: ["./landing.page.scss"],
})
export class LandingPage {
  constructor() {}

  ionViewWillEnter() {
    console.log("ionViewWillEnter: Landing Page");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave: Landing Page");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave: Landing Page");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter: Landing Page");
  }
}
