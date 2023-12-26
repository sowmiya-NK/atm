import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  

  AccountDetails: Account = {
    name: '',
    userId: 0,
    balance: 0,
    amount: 0,
  };
  errorMessage: string = '';
  amount: number = 0;

  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private route: Router,
 
  ) {}

  ngOnInit(): void {
    const accountId = this.storageService.getAccount().userId;
    if (accountId !== undefined && accountId !== null) {
      this.userService.getAccountDetails(accountId).subscribe({
        next: (response: any) => {
          console.log('account', response);
     
          this.AccountDetails = response;
        },
        error: (err) => console.log('error', err),
        complete: () => console.log('completed'),
      });
    } else {
      console.error('Account ID is undefined or null.');
    }
  }

  credit() {
    console.log(this.amount);
    this.userService
      .credit(this.amount, this.storageService.getAccount().userId, 1)
      .subscribe({
        next: (response: any) => {
          console.log(response),
          
          this.ngOnInit();
          
        },
        error: (err) => console.log('error', err),
        complete: () => console.log('completed'),
      });
    this.amount = 0;
    this.ngOnInit();
  }

  debit() {
    console.log(this.amount);
    const currentBalance = this.storageService.getAccount().amount;
    console.log('c', currentBalance);

    // if (this.amount <= currentBalance) {
    console.log(currentBalance);

    this.userService
      .debit(this.amount, this.storageService.getAccount().userId, 2)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.ngOnInit();
        },
        error: (err) => console.log('error', err),
        complete: () => console.log('completed'),
      });
    // } else {
    //   this.errorMessage = 'Insufficient balance';
    // }

    this.amount = 0;
  }

  TransactionHistory() {
    this.route.navigate(['/transaction']);
  }
}
