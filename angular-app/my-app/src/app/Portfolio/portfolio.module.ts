import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioStore } from './portfolio.store';
import { portfolioRouting } from './portfolio.routes';

@NgModule({
    imports: [BrowserModule, portfolioRouting],
    exports: [],
    declarations: [ PortfolioComponent ],
    providers: [PortfolioStore]
})
export class PortfolioModule {}