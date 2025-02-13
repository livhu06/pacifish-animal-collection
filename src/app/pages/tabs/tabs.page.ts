import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, scanOutline, notificationsOutline, settingsOutline, qrCode } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { 
    addIcons({
      homeOutline, qrCode, scanOutline, notificationsOutline,  settingsOutline
    });
  }

 
  selectedTab: any
  @ViewChild('tabs') tabs!: IonTabs;

  ngOnInit() {
  }

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }

}
