import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WatchesService } from 'src/app/watches/watches.service';
import { StorageService } from 'src/app/storage/storage.service';
import { NgForm } from '@angular/forms';
import { promise } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: StorageService) { }
  

  ngOnInit() {
  }

  // send to service data for email
  onSubmit(form: NgForm){
    const value = form.value;
    console.log(value)
    this.httpClient.sendEmail(value.name, value.email, value.message ).subscribe(success => {console.log(success)},
    
    error => { console.log(error) });
    form.reset();
  }
}
