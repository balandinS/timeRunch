import { Injectable } from '@angular/core';
import { WatchesService } from '../watches/watches.service';
import { HttpClient } from '@angular/common/http';
import { WatchModel } from '../watches/watche.model';
import { MdbCardBodyComponent } from 'angular-bootstrap-md';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public watchService: WatchesService, public httpClient: HttpClient) { }

  methodGetAll() {
    const url = 'http://localhost:3000/watches'
    this.httpClient.get<WatchModel[]>(url,
    {
      observe: 'body',
      responseType: 'json'
    }
    )
    .subscribe((watches: WatchModel[]) => {
      console.log(watches)
       this.watchService.setWatchesh(watches);
    })
  }

}
