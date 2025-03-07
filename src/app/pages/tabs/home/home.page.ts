import { Component, OnInit, Input } from '@angular/core';
import { ProfileSectionComponent } from 'src/app/components/profile-section/profile-section.component';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ IonicModule, RouterLink, ProfileSectionComponent]
  
})
export class HomePage implements OnInit {

  totalAnimals: number = 10;
  private cartService = new CartService();

  badges = [
    { id: 1, imageUrl: "assets/pictures/badge1.png", number: 1 },
    { id: 2, imageUrl: "assets/pictures/badge2.png", number: 2 },
    { id: 3, imageUrl: "assets/pictures/badge3.png", number: 3 }
  ];

  constructor() { }

  ngOnInit() {
  }
}
