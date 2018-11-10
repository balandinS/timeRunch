import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { WatchesComponent } from './watches/watches.component';

const approutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'watches', component: WatchesComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(approutes)
    ],
    exports: [ RouterModule ]
})

export class AppRouterModule {

}