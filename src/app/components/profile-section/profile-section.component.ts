import { Component, OnInit } from '@angular/core';
import { profile } from 'src/app/pages/data/profile';
import { IonFabButton } from "@ionic/angular/standalone";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  standalone: true,
  styleUrls: ['./profile-section.component.scss'],
imports: [IonFabButton, RouterLink],

})
export class ProfileSectionComponent  implements OnInit {
 
  profiles: any[] = [];
  constructor() { }

  ngOnInit() {
    this.profiles = [...profile]
  }

}
