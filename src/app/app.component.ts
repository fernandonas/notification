import { Component, OnInit } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'notification';

  constructor(private oneSignal: OneSignal) {
    this.oneSignal.init({
      appId: "c7edfbab-8c1a-48cc-a504-a308f1ecfb7f",
    });
  }

}
