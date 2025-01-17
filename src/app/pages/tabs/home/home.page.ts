import { Component, OnInit, Input } from '@angular/core';
import { ProfileSectionComponent } from 'src/app/components/profile-section/profile-section.component';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { profile } from '../../data/profile';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ IonicModule, RouterLink, ProfileSectionComponent]
  
})
export class HomePage implements OnInit {

 profiles: any[] =[];
 totalItem:number = 10;

  badges = [
    { id: 1, icon: 'ribbon', number: 1, color: 'success' },
    { id: 2, icon: 'ribbon', number: 2, color: 'secondary' },
    { id: 3, icon: 'ribbon', number: 3, color: 'success' }
  ];

  constructor() { }

  ngOnInit() {
    this.profiles =[ ...profile];
  }

}
