import { Observable } from "rxjs";


export class Account {
    first_name!: String;
    last_name!: String;
    email!: String;
    username!: String;
    password!: String;
    role!: String;

}

export abstract class AccountData {
    abstract fetchAccounts(): Observable<any>;
    abstract fetchAccount(id: String): Observable<any>;
    abstract createAccount(data: Account): Observable<any>;
    abstract editAccount(data: Account, id: String): Observable<any>;
    abstract deleteAccount(id: number): Observable<any>;
}