import { inject, Injectable } from '@angular/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { animals } from '../data/animals';
import { Animal } from '../interfaces/animal.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  animalModel: any = null;
  cartStoreName = 'barcode_cart';
  animal_data: Animal[] = [...animals];

  private cart$ = new BehaviorSubject<any>(null);

  get cart(){
    return this.cart$.asObservable();
  }

  private storageService = inject(StorageService)

  constructor() { 
    this.getCart();
    this.addAnimal(this.animal_data[0]);
  }

  async startScan() {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: 0,
        cameraDirection: 1
      });
      return result.ScanResult; 
    } catch(e){
      throw(e);
    }
  } 

  addItemByBarcode(barcode: string) {
    const item = this.animal_data.find((item) => item.barcode == barcode);
    if(!item){
      throw 'No such animal found';
    }
    this.addAnimal(item);
  }

  addAnimal(item: any) {
    if (this.animalModel) {
      const index = this.animalModel.items.findIndex(
        (data: any) => data.item_id == item.id
      );
  
      if (index >= 0) {
        throw new Error(`You already have ${item.title} in the cart.`);
      } else {
        const newItem = {
          item_id: item?.id,
          title: item?.title,
          diet: item?.diet,
          habitat: item?.habitat,
          family: item?.family,
          sizeRange: item?.sizeRange,
          lifespan: item?.lifespan,
          audioUrl: item?.audioUrl,
          videoUrl: item?.videoUrl,
          locations: item?.locations,
          imageUrl: item?.imageUrl,
          barcode: item?.barcode,
          quantity: 1, 
        };
  
        this.animalModel.items = [...this.animalModel.items, newItem];
      }
    } else {
      this.animalModel = {
        items: [
          {
            item_id: item?.id,
            imageUrl: item?.imageUrl,
            title: item?.title,
            diet: item?.diet,
            family: item?.family,  
            habitat: item?.habitat,
            sizeRange: item?.sizeRange,
            lifespan: item?.lifespan,
            audioUrl: item?.audioUrl,
            videoUrl: item?.videoUrl,
            locations: item?.locations,
            barcode: item?.barcode,
            quantity: 1, 
          },
        ],
      };
    }
      return this.calculate();
  }
  
  calculate() {
    const items = this.animalModel.items.filter((item: any) => item.quantity > 0);
      if (items.length === 0) {
      this.clearCart();
      return;
    }
  
    let totalItem = items.length;
  
    this.animalModel = {
      ...this.animalModel,
      items,
      totalItem, 
    };
  
    this.cart$.next(this.animalModel);
  
    this.saveCart(this.animalModel);
  
    return this.animalModel;
  }
  
  clearCart() {
    this.storageService.removeStorage(this.cartStoreName);
    this.animalModel = null;
    this.cart$.next(null);
  }

  saveCart(data: any) {
    const animalModel = JSON.stringify(data);
    this.storageService.setStorage(this.cartStoreName, animalModel);
  }

  async getCart() {
    let data: any = this.cart$.value;

    if(!data) {
      data = await this.storageService.getStorage(this.cartStoreName);

      if (data?.value) {
        this.animalModel = JSON.parse(data.value);
        this.cart$.next(this.animalModel);
      }
    }
  }
}
