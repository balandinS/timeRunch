import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NavbarModule, WavesModule, IconsModule, ButtonsModule } from 'angular-bootstrap-md'
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    WavesModule,
    IconsModule,
    ButtonsModule
   
  ],
  declarations: [HeaderComponent, HomeComponent, FooterComponent],
  exports: [HeaderComponent, HomeComponent, FooterComponent]
})
export class CoreModule { }
