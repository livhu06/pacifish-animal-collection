import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { videocamOutline, locationOutline, hourglassOutline, arrowForwardOutline, arrowBackOutline, volumeHighOutline } from 'ionicons/icons';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Swiper } from 'swiper/types';
import { IonicSlides } from '@ionic/angular/standalone';
import { AnimalCardComponent} from 'src/app/components/animal-card/animal-card.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/pages/services/cart.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [AnimalCardComponent, IonicModule]
})
export class CollectionPage implements OnInit {

  swiperModules = [IonicSlides];

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  currentIndex = 0;
  model: any = null;
  cartSub!: Subscription;
  totalItems: number = 0; 

  private cartService = inject(CartService);
  private router = inject(Router);

  constructor() { 
    addIcons({ videocamOutline,hourglassOutline, arrowForwardOutline, arrowBackOutline, locationOutline, volumeHighOutline });
  }

  ngOnInit() {
    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.model = cart;
        this.totalItems = cart ? cart?.totalItem : 0;
      }
    });
  }

  swiperReady(swiperInstance?: any) {
    this.swiper = swiperInstance.detail[0];
  }

  prevAnimal() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.swiper?.slidePrev();
  }

  nextAnimal() {
    this.currentIndex = Math.min(this.currentIndex + 1, this.totalItems - 1);
    this.swiper?.slideNext();
  }
}

