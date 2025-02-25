import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AccountDetailsComponent,
    TransactionListComponent
  ],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}
}