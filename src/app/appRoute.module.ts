import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';

const approutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'watches', loadChildren: './watches/watchesModule/watches.module#WatchesModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(approutes)
    ],
    exports: [ RouterModule ]
})

export class AppRouterModule {

}