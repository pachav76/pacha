import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SomeService } from '../shared/some.service';

@Injectable()
export class PortfolioStore {
    subscriptions: Subscription[] = [];

    constructor(private someService: SomeService) {
    }

    getUsers() {
        return this.someService.getUsers();
    }
}
