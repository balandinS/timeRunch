import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WatchesService } from 'src/app/watches/watches.service';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: StorageService) { }
  

  ngOnInit() {
  }
  products() {
  this.httpClient.methodGetAll()
   this.router.navigate(['/watches'], {relativeTo: this.route})
  }
}
