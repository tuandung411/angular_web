import { Injectable } from '@angular/core';
import { Account, AccountData } from '../data/account';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService extends AccountData {
    constructor(private http: HttpClient) {
        super();
    }

    BASE_URL = environment.BASE_URL;

    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "Server error");
    }

    fetchAccount(id: String): Observable<any> {
        let url = this.BASE_URL + `/account/api/v1/accounts/${id}`;
        return this.http.get(url).catch(this.errorHandler);
    }

    fetchAccounts(): Observable<any> {
        let url = this.BASE_URL + `/account/api/v1/accounts`;
        return this.http.get(url).catch(this.errorHandler);
    }

    createAccount(data: Account): Observable<any> {
        let url = this.BASE_URL + `/account/api/v1/accounts`;
        const headers = { 'content-type': 'application/json'}  
        const body = JSON.stringify(data);
        return this.http.post(url, body, {'headers':headers})
                    .catch(this.errorHandler);
    }

    editAccount(data: Account, id: String): Observable<any> {
        let url = this.BASE_URL + `/account/api/v1/accounts/${id}`;
        const headers = { 'content-type': 'application/json'}  
        const body = JSON.stringify(data);
        return this.http.put(url, body, {'headers':headers})
                    .catch(this.errorHandler);
    }

    deleteAccount(id: number): Observable<any> {
        let url = this.BASE_URL + `/account/api/v1/accounts/${id}`;
        return this.http.delete(url)
                    .catch(this.errorHandler);
    }
}