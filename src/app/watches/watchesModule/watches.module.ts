import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule, ButtonsModule, CardsFreeModule, CarouselModule, NavbarModule, DropdownModule, MDBBootstrapModule } from 'angular-bootstrap-md'
import { WatchesComponent } from '../watches.component';
import { WatchesListComponent } from '../watches-list/watches-list.component';
import { WatchesItemComponent } from '../watches-list/watches-item/watches-item.component';
import { WatchesRoutingModule } from '../watches-routing/watches-routing.module';
import { WatchesService } from '../watches.service';
import { WatchDetielComponent } from '../watch-detiel/watch-detiel.component';
import { AlsoListComponent } from '../also-list/also-list.component';
import { AlsoListItemComponent } from '../also-list/also-list-item/also-list-item.component';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    WatchesRoutingModule,
    MDBBootstrapModule,
    ShareModule
  ],
  declarations: [
    WatchesComponent,
    WatchDetielComponent,
    AlsoListComponent,
    AlsoListItemComponent,
    WatchesListComponent,
    WatchesItemComponent
   
  ],
  providers: [ 
    WatchesService
  ],
  exports: [WatchesComponent]
})
export class WatchesModule { }
