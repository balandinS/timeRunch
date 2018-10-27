import { Component, OnInit } from '@angular/core';
import { WatchModel } from '../watche.model';
import { Subscription } from 'rxjs';
import { WatchesService } from '../watches.service';

@Component({
  selector: 'app-watches-list',
  templateUrl: './watches-list.component.html',
  styleUrls: ['./watches-list.component.scss']
})
export class WatchesListComponent implements OnInit {
  watches: WatchModel[];
  load:boolean
  endPoint: number = 3; // the point end for slice
  subcription = new Subscription();
  constructor(private watchservice: WatchesService) { }

  ngOnInit() {
   this.watches = this.watchservice.getWatches();
   this.initReadMore()
  }
  
  initReadMore() {
    if(this.watches.length <= 3) {
       this.load = true
    } else {
      this.load = false
    }
    console.log(this.load)
  }

  loadRow() {
    this.endPoint += 3;
    if(this.endPoint > this.watches.length) {
         this.endPoint = this.watches.length;
         this.load = true;
    }
  }
}
