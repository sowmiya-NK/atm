import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { TransAction } from '../models/trans-action';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(pinnumber: number): Observable<Account[]> {
    const number = {
      pinnumber: pinnumber,
    };
    return this.http.post<Account[]>(`http://localhost:8080/api/login`, number);
  }

  getAccountDetails(userId: number): Observable<Account> {
    return this.http.get<Account>(
      `http://localhost:8080/api/account/${userId}`
    );
  }
  credit(
    amount: number,
    userId: number,
    type: number
  ): Observable<TransAction[]> {
    const credtiDetails = {
      amount: amount,
      transactionalType: type,
      userId: userId,
    };
    return this.http.put<TransAction[]>(
      `http://localhost:8080/api/transaction/credit`,
      credtiDetails
    );
  }
  debit(
    amount: number,
    userId: number,
    type: number
  ): Observable<TransAction[]> {
    const credtiDetails = {
      amount: amount,
      transactionalType: type,
      userId: userId,
    };
    return this.http.put<TransAction[]>(
      `http://localhost:8080/api/transaction/debit`,
      credtiDetails
    );
  }
  getTransactionHistory(id: number): Observable<TransAction[]> {
    return this.http.get<TransAction[]>(
      `http://localhost:8080/api/transaction/${id}`
    );
  }
}
