import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routes';

@NgModule({
    imports: [BrowserModule, homeRouting],
    exports: [  ],
    declarations: [ HomeComponent ],
    providers: []
})
export class HomeModule { }