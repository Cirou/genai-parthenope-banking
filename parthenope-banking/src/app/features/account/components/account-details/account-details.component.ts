import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  account: Account | null = null;
  loading = true;
  error = '';

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAccountDetails().subscribe({
      next: (account) => {
        this.account = account;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Errore nel caricamento dei dati del conto';
        this.loading = false;
      }
    });
  }
}