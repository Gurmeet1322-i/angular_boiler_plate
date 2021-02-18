import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: MainComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }