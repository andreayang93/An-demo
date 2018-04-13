import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {OurmapComponent} from './ourmap/ourmap.component';
import {ItemListComponent} from './item-list/item-list.component';
import {TestListComponent} from './test-list/test-list.component';
import {MapdetailComponent} from './mapdetail/mapdetail.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {UnsavedGuard} from './unsaved.guard';
import {ChatComponent} from './chat/chat.component';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {LoginComponent} from './login/login.component';
import {TemplateComponent} from './template/template.component';
import {TestHttpComponent} from './test-http/test-http.component';
import {WebsocketComponent} from './websocket/websocket.component';
const routes: Routes = [{
    path: 'home',
    component: HomeComponent,
}, {
    path: 'home/contact',
    component : ContactComponent,
    canDeactivate: [UnsavedGuard]
}, {
    path: 'home/about',
    component: AboutComponent ,
}, {
    path: 'home/ourmap' ,
    component : OurmapComponent ,
    children: [{
        path: 'detail',
        component : MapdetailComponent,
    }]
}, {
    path: 'home/itemlist',
    component: ItemListComponent,
}, {
    path: 'home/itemlist/:itemID',
component: ItemDetailsComponent,
}, {
    path: 'home/product/:prodid',
    component: ProductDetailComponent,
}, {
    path: 'home/login',
    component: LoginComponent,
}, {
    path: 'home/template',
    component: TemplateComponent
}, {
    path: 'home/testhttp',
    component: TestHttpComponent
}, {
    path: 'home/websocket',
    component: WebsocketComponent
}, {
    path: 'chat',
    component: ChatComponent,
    outlet: 'aux'
}, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: '**',
    component: PagenotfoundComponent
}];

@NgModule({
    providers: [UnsavedGuard],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
