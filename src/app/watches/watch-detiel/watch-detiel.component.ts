import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { WatchModel } from '../watche.model';
import { WatchesService } from '../watches.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-watch-detiel',
  templateUrl: './watch-detiel.component.html',
  styleUrls: ['./watch-detiel.component.scss']
})
export class WatchDetielComponent implements OnInit, OnDestroy {
  watch: WatchModel;
  index: number;
  subacription = new Subscription();
  @ViewChild('title', {read: ElementRef} ) title : ElementRef;
  constructor(
    private watchService: WatchesService,
    private route: ActivatedRoute
    ) { }
   
  ngOnInit() {
   this.subacription = this.route.params.subscribe(params => {
      this.index = +params['id'];
      this.watch = this.watchService.getWatch(this.index);
      console.log(this.watch.img.src)
    })
    
  }


  show(img : any) {
    this.title.nativeElement.src = img.src;
  }
    
 ngOnDestroy() {
   this.subacription.unsubscribe;
 }
}
