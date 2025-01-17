import { Component, OnInit,  Input } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { animals } from 'src/app/pages/data/animals';
@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  standalone:true,
  styleUrls: ['./animal-card.component.scss'],
  imports: [IonicModule]
})
export class AnimalCardComponent  implements OnInit {
 
  animals: any[] = [];
  constructor() { }

  ngOnInit() {
     this.animals = [...animals]
  }

}
