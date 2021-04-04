import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
    declarations:[
        MainComponent,
        NavbarComponent,
        TabsComponent
    ],
    imports:[
        CommonModule,
        MainRoutingModule
    ],
    providers:[]
})
export class MainModule{}