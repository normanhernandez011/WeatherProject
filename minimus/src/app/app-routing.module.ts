import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'details/:city', component: DetailsComponent}
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

