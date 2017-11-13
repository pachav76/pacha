import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './shared/services/api.service';
import { SomeService } from './shared/services/some.service';

import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    PortfolioModule,
    HomeModule,
    routing
  ],
  providers: [appRoutingProviders, ApiService, SomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
