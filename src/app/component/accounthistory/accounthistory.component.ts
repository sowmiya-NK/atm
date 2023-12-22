import { Component, OnInit } from '@angular/core';
import { TransAction } from 'src/app/models/trans-action';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-accounthistory',
  templateUrl: './accounthistory.component.html',
  styleUrls: ['./accounthistory.component.css'],
})
export class AccounthistoryComponent implements OnInit {
  history: TransAction[] = [];
  constructor(
    private userService: UserService,
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
    this.userService
      .getTransactionHistory(this.storageService.getAccount().userId)
      .subscribe({
        next: (response: any) => {
          this.history=response,
          console.log(response);
        },
      });
  }
}
