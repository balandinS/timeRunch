import { Injectable } from '@angular/core';
import { WatchesService } from '../watches/watches.service';
import { HttpClient } from '@angular/common/http';
import { WatchModel } from '../watches/watche.model';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public watchService: WatchesService, public httpClient: HttpClient) { }
  ///method get, get all watches from data base
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
  ///method get, find watches with brand from data base
  methodGetBrands(brand: string) {
    const url = 'http://localhost:3000/watches/'+brand;
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
 //method post, send email for contact with us  
  sendEmail(name, email, message) {
    var promise: any;
    const uri = 'http://localhost:3000/send';
    const body = {
      name: name,
      email: email,
      message: message,
    };
   return this.httpClient.post(uri, JSON.stringify(body));
  }

}
