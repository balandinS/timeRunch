import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { WatchesComponent } from '../watches.component';
import { WatchesListComponent } from '../watches-list/watches-list.component';
import { WatchesItemComponent } from '../watches-list/watches-item/watches-item.component';
import { WatchesRoutingModule } from '../watches-routing/watches-routing.module';
import { WatchesService } from '../watches.service';
import { WatchDetielComponent } from '../watch-detiel/watch-detiel.component';

@NgModule({
  imports: [
    CommonModule,
    WatchesRoutingModule,
    WavesModule,
    WatchesRoutingModule,
    ButtonsModule
    
  ],
  declarations: [
    WatchesComponent,
    WatchesListComponent,
    WatchesItemComponent,
    WatchDetielComponent
  ],
  providers: [ 
    WatchesService
  ],
  exports: [WatchesComponent]
})
export class WatchesModule { }
