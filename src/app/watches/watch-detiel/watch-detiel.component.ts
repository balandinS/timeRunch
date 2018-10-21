import { Component, OnInit } from '@angular/core';
import { WatchModel } from '../watche.model';
import { WatchesService } from '../watches.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-detiel',
  templateUrl: './watch-detiel.component.html',
  styleUrls: ['./watch-detiel.component.scss']
})
export class WatchDetielComponent implements OnInit {
  watch: WatchModel;
  index: number;
  constructor(
    private watchService: WatchesService,
    private route: ActivatedRoute
    ) { }
   
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = +params['id'];
      this.watch = this.watchService.getWatch(this.index);
      console.log(this.watch.img.src)
    })
    
  }
    

}
