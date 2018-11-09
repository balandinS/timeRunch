import { Injectable } from '@angular/core';
import { WatchModel } from './watche.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchesService {
  watchChange = new Subject<WatchModel[]>()
  private watches: WatchModel[] = [];

  constructor() { }

  getWatches() {
    return this.watches;
  }
  getWatch(index:number) {
    const watch = this.watches[index];
    return watch;
  }
  //set array with new data
  setWatchesh(newwatches: WatchModel[]) {
         this.watches = newwatches
         this.watchChange.next(this.watches.slice())
  }
}
