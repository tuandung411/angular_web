import { Injectable } from '@angular/core';
import { AuthData, Login, Register } from '../data/auth';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService extends AuthData {
    constructor(private http: HttpClient) {
        super();
    }

    BASE_URL = environment.BASE_URL;

    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "Server error");
    }

    getToken(): String {
        var token = 'xx.yy.zz';
        if (localStorage.length != 0) {
            token = String(localStorage.getItem('userToken'));
        }
        return token;
    }  

    login(data: Login): Observable<any> {
        let url = this.BASE_URL + `/api/v1/authentication/login`;
        return this.http.post(url, data).catch(this.errorHandler);
    }

    register(data: Register): Observable<any> {
        let url = this.BASE_URL + `/api/v1/authentication/register`;
        return this.http.post(url, data)
                    .catch(this.errorHandler);
    }

    logout(): Observable<any> {
        let url = this.BASE_URL + `/api/v1/authentication/logout`;
        return this.http.get(url).catch(this.errorHandler);
    }
}