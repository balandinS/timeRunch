import { Component, OnInit, OnDestroy } from '@angular/core';
import { WatchModel } from '../watche.model';
import { Subscription } from 'rxjs';
import { WatchesService } from '../watches.service';
import { StorageService } from 'src/app/storage/storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watches-list',
  templateUrl: './watches-list.component.html',
  styleUrls: ['./watches-list.component.scss']
})
export class WatchesListComponent implements OnInit, OnDestroy {
  watches: WatchModel[];
  load:boolean = false; //vissbale elemnt button load more 
  visibaleProgres: boolean = false; // vissbale elemnt progress 
  endPoint: number = 3; // the point end for slice
  subcription = new Subscription();
  subcriptionRoute = new Subscription();
  constructor(
    private watchservice: WatchesService, 
    private httpClient: StorageService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    ///check request from client
    this.subcriptionRoute = this.route.params.subscribe(params => {
      if(params['brand'] === 'all'){
        this.httpClient.methodGetAll();
      } else if(params['brand'] === 'accessories') {
        this.httpClient.methodGetaccessories();
      } else if(params['brand'] === 'secondhand') {
        this.httpClient.methodGetsecondhand()  
      }
      else {
        this.httpClient.methodGetBrands(params['brand']);  
      }
    })

    // listen to change in array watches;
    this.subcription = this.watchservice.watchChange.subscribe((watches: WatchModel[]) => {
    this.watches = watches;
    this.initProgres()
    this.initReadMore()
    },
    error => { console.error(error);}
    )
  
 
  }
 ///  show to client loade progress bar 
  initProgres(){
    if(this.watches.length > 0 ){
       this.visibaleProgres = true;
    } else {
      this.visibaleProgres = false;
    }
  }
//// show button load more to client if length array is bigger then 3 items
  initReadMore() {
    if(this.watches.length <= 3) {
       this.load = false
       this.endPoint = 3;
    } else {
      this.load = true
    }
  }

  loadRow() {
    if(this.watches.length > 0 ){
    this.endPoint += 3;
    }
    if(this.endPoint >= this.watches.length) {
      this.endPoint = this.watches.length;
      this.load = false;
    }

  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
    this.subcriptionRoute.unsubscribe();
  }
}
