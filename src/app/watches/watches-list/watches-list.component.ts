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
  subcription = new Subscription();
  constructor(private watchservice: WatchesService) { }

  ngOnInit() {
   this.watches = this.watchservice.getWatches();
  }

}
