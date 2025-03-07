import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonTabs } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage implements OnInit {

  totalItems: number = 0; 
  cartSub!: Subscription;
  private cartService = inject(CartService);
  
  selectedTab: any
  @ViewChild('tabs') tabs!: IonTabs;

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.totalItems = cart ? cart?.totalItem : 0;
      }
    });
  }

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
  }
  async startScan() {
    try {
      const code = await this.cartService.startScan();
      this.cartService.addItemByBarcode(code);

      this.navCtrl.navigateForward(['/tabs/home/collection']); 
    } catch (e){
      console.log(e);
    }
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }
}
