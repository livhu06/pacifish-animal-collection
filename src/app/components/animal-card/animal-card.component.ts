import { Component, OnInit,  Input } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { fastFoodOutline, heartCircleOutline } from 'ionicons/icons';
import { animals } from 'src/app/pages/data/animals';
@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  standalone:true,
  styleUrls: ['./animal-card.component.scss'],
  imports: [IonicModule]
})
export class AnimalCardComponent  implements OnInit {
 
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() diet!: string;
  @Input() habitat!: string;
  @Input() family!: string;
  @Input() sizeRange!: string;
  @Input() lifespan!: string;
  animals: any[] = [];

  constructor() { 
    addIcons({fastFoodOutline, heartCircleOutline})
  }

  ngOnInit() {
     this.animals = [...animals]
  }

}
