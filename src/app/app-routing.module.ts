import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { AccountComponent } from './component/account/account.component';
import { AccounthistoryComponent } from './component/accounthistory/accounthistory.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'transaction',
    component: AccounthistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
