import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PageService {

    constructor(private http: Http) { }

    topThreePages() {
        return this.http.get('static/assets/pages.json').toPromise();
    }
}
