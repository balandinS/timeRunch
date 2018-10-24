import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule, ButtonsModule, CardsFreeModule } from 'angular-bootstrap-md'
import { WatchesComponent } from '../watches.component';
import { WatchesListComponent } from '../watches-list/watches-list.component';
import { WatchesItemComponent } from '../watches-list/watches-item/watches-item.component';
import { WatchesRoutingModule } from '../watches-routing/watches-routing.module';
import { WatchesService } from '../watches.service';
import { WatchDetielComponent } from '../watch-detiel/watch-detiel.component';
import { AlsoListComponent } from '../also-list/also-list.component';
import { AlsoListItemComponent } from '../also-list/also-list-item/also-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    WatchesRoutingModule,
    WavesModule,
    WatchesRoutingModule,
    ButtonsModule,
    CardsFreeModule
    
  ],
  declarations: [
    WatchesComponent,
    WatchesListComponent,
    WatchesItemComponent,
    WatchDetielComponent,
    AlsoListComponent,
    AlsoListItemComponent
  ],
  providers: [ 
    WatchesService
  ],
  exports: [WatchesComponent]
})
export class WatchesModule { }
