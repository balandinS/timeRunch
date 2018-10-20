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
      12
    ),
    new WatchModel(
     'Eligant',
     'Armanani',
     '4432',
     'condtion',
     'box',
     12
   ),
   new WatchModel(
     'A',
     'hot',
     'best',
     'condtion',
     'box',
     12
   ),
   new WatchModel(
     'A',
     'hot',
     'best',
     'condtion',
     'box',
     12
   ),
   new WatchModel(
     'A',
     'hot',
     'best',
     'condtion',
     'box',
     12
   ),

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
