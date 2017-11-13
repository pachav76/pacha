import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class SomeService {
    private readonly API_PREFIX = ''; //not used here

    constructor(private apiService: ApiService) {
    }

    getUser(id: number) {
        return this.apiService.get(this.API_PREFIX + `${id}`).then((res) => {
            return res;
        });
    }

    getProducts(): Promise<any> {
        return this.apiService.get(this.API_PREFIX + 'photos').then((res) => {
            return <any>res;
        });
    }
}
