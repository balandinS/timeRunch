import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';





@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MDBBootstrapModule   /// import style matireal bootstrap.
  ],
  //Declarations and explore the core components like navbar footer and home page
  declarations: [HeaderComponent, HomeComponent, FooterComponent],
  exports: [HeaderComponent, HomeComponent, FooterComponent]
})
export class CoreModule { }
