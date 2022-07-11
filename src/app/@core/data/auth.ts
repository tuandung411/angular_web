import { Observable } from "rxjs";

export class Login {
    user!: string;
    password!: string;
}

export class Register {
    fullname!: string;
    username!: string;
    password!: string;
    email!: string;
    role!: string;
}

export abstract class AuthData {
    abstract getToken(): String;
    abstract login(data: Login): Observable<any>;
    abstract logout(): Observable<any>;
    abstract register(data: Register): Observable<any>;
}