import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.page.html',
    standalone: true,
    imports: [IonicModule],
    styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
