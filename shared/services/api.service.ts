import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
    constructor(protected http: Http) {
    }

    get(path: string): Promise<any> {
        return this.http.get(this.createUrl(path), { headers: this.getNoCacheHeader() })
            .toPromise()
            .catch((error) => this.handleErrorResponse(error))
            .then((res) => this.handleSuccessfulResponse(res));
    }

    /**
     * Send POST request
     * @param path API endpoint path
     * @param body request data
     * @param needErrorData Optional: using true to get detailed error message (will be changed)
     */
    request(path: string, body: any): Promise<any> {
        let options = this.getOptions(body);

        return this.http.request(this.createUrl(path), options).toPromise()
            .catch((error) => this.handleErrorResponse(error))
            .then((res) => this.handleSuccessfulResponse(res));
    }

    protected getNoCacheHeader() {
        let headers = new Headers();
        headers.append('Cache-Control', 'no-cache, no-store, must-revalidate'); // HTTP 1.1.
        headers.append('Pragma', 'no-cache'); // HTTP 1.0.
        headers.append('Expires', '0'); // Proxies.
        return headers;
    }

    private handleSuccessfulResponse(response: Response | XMLHttpRequest | any) {
        let body = {};
        if (response instanceof Response) {
            if (response.text().length > 0) {
                body = response.json();
            } else {
                body = response.text();
            }
        } else if (response instanceof XMLHttpRequest) {
            body = JSON.parse(response.response);
        } else {
            body = JSON.parse(response);
        }
        const data = this.constructData(body);
        return Promise.resolve(data);
    }

    private handleErrorResponse(error: Response | XMLHttpRequest | any) {
        return 'о-ё-ёй!!!!';
    }

    private constructData(body: any) {
        if (body.response_data instanceof Array) {
            //Get requests
            return [...body.response_data];
        } else {
            //Post requests
            const data: any = {};
            return body;
        }
    }

    private getOptions(body: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ method: 'POST', headers: headers, body: JSON.stringify(body) });
    }

    private createUrl(path: string) {
        return 'https://jsonplaceholder.typicode.com/' + path;
    }
}