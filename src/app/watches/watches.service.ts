import { Injectable } from '@angular/core';
import { WatchModel } from './watche.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchesService {
  watchChange = new Subject<WatchModel[]>()
  private watches: WatchModel[] = [
    new WatchModel(
      'strep',
      'ferrari',
      '830437',
      'condtion',
      'silver case',
      100,
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOQeq4DgxxNhzxci3Hk-7lf_e3mlWYMAc2hW-ULiOX21wDueX",
        src1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OYYRhi4LfRjpdfSKtLwuiNML1tVkh4uMkgPjj4FGOZMNyh37",
        src2: "https://cdn.idealo.com/folder/Product/4161/1/4161102/s4_produktbild_gross/fossil-townsman-me1138.jpg"
      }
    )
  ]

  constructor() { }

  getWatches() {
    return this.watches;
  }
  getWatch(index:number) {
    const watch = this.watches[index];
    return watch;
  }

}
