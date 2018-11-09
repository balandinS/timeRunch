import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { WatchesComponent } from "../watches.component";
import { WatchesListComponent } from "../watches-list/watches-list.component"
import { WatchDetielComponent } from "../watch-detiel/watch-detiel.component";

const watchroutes: Routes = [
  {path: 'watches', component: WatchesComponent, children:[
  {path: ':brand', component: WatchesListComponent},
  {path: ':brand/:id', component: WatchDetielComponent}
 
]},
] 

@NgModule({
imports:[RouterModule.forChild(watchroutes)],
exports:[RouterModule]
})
export class WatchesRoutingModule { }
