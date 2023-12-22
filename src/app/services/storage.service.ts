import { Injectable } from '@angular/core';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  setAccount(account: Account): void {
    localStorage.setItem('accountUser', JSON.stringify(account));
  }

  getAccount(): Account {
    return JSON.parse(localStorage.getItem('accountUser') || '{}');
  }
}
