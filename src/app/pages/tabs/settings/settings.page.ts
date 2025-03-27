import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    standalone: true,
    imports: [IonicModule],
    styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
