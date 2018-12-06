import { Component, OnInit } from '@angular/core';
import { WatchModel } from '../watche.model';
import { WatchesService } from '../watches.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-also-list',
  templateUrl: './also-list.component.html',
  styleUrls: ['./also-list.component.scss']
})
export class AlsoListComponent implements OnInit {
  

  watches: WatchModel[];
  subcription = new Subscription();
  constructor(private watchservice: WatchesService) { }

  ngOnInit() {
    this.watches = this.watchservice.getWatches();
    
  }

}
