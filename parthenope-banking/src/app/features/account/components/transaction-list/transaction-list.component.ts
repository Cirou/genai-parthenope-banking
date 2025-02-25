import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  loading = true;
  error = '';
  filterForm: FormGroup;
  selectedTransaction: Transaction | null = null;

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      dateFrom: [''],
      dateTo: [''],
      type: ['']
    });
  }

  ngOnInit() {
    this.loadTransactions();
    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilters();
    });
  }

  loadTransactions() {
    this.accountService.getTransactions().subscribe({
      next: (transactions) => {
        this.transactions = transactions;
        this.filteredTransactions = transactions;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Errore nel caricamento delle transazioni';
        this.loading = false;
      }
    });
  }

  applyFilters() {
    const filters = this.filterForm.value;
    this.filteredTransactions = this.transactions.filter(transaction => {
      let match = true;
      
      if (filters.dateFrom) {
        match = match && new Date(transaction.date) >= new Date(filters.dateFrom);
      }
      
      if (filters.dateTo) {
        match = match && new Date(transaction.date) <= new Date(filters.dateTo);
      }
      
      if (filters.type) {
        match = match && transaction.type === filters.type;
      }
      
      return match;
    });
  }

  showTransactionDetails(transaction: Transaction) {
    this.selectedTransaction = transaction;
  }

  closeTransactionDetails() {
    this.selectedTransaction = null;
  }

  exportTransactions() {
    // Implementazione dell'esportazione
    console.log('Esportazione transazioni');
  }
}