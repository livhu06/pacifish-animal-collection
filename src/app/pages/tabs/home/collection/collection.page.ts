import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { videocamOutline, locationOutline, hourglassOutline, arrowForwardOutline, arrowBackOutline, volumeHighOutline } from 'ionicons/icons';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Swiper } from 'swiper/types';
import { IonicSlides } from '@ionic/angular/standalone';
import { animals } from 'src/app/pages/data/animals';
import { AnimalCardComponent} from 'src/app/components/animal-card/animal-card.component';


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
  animals: any[] = [];

  constructor() { 
    addIcons({ videocamOutline,hourglassOutline, arrowForwardOutline, arrowBackOutline, locationOutline, volumeHighOutline });
  }

  ngOnInit() {
    this.animals = [...animals];
  }

  

  swiperReady(swiperInstance?: any) {
    this.swiper = swiperInstance.detail[0];
  }

  prevAnimal() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.swiper?.slidePrev();
  }

  nextAnimal() {
    this.currentIndex = Math.min(this.currentIndex + 1, this.animals.length - 1);
    this.swiper?.slideNext();
  }

  swiperSlideChanged(e: any){
    console.log('changed: ', e)
  }
  
}
 