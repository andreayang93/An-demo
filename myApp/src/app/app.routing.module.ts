import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {OurmapComponent} from './ourmap/ourmap.component';
import {ItemListComponent} from './item-list/item-list.component';
const routes: Routes = [{
    path: 'home',
    component: HomeComponent,
}, {
    path : 'home/contact',
    component : ContactComponent,
}, {
    path : 'home/about',
    component : AboutComponent ,
}, {
    path : 'home/ourmap',
    component : OurmapComponent ,
}, {
    path: 'home/itemlist',
    component: ItemListComponent,
}, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: '**',
    component: PagenotfoundComponent
}];

@NgModule({
    providers: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
