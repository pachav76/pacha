import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SomeService } from '../shared/services/some.service';

@Injectable()
export class PortfolioStore {
    subscriptions: Subscription[] = [];
    products: any;

    constructor(private someService: SomeService) {
    }

    getProducts() {
        if (!this.products)  this.someService.getProducts().then(roducts => {
            return this.products;
        });
        else
            return this.products;
    }
}