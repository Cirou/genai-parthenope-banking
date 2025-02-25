import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-financial-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financial-summary.component.html',
  styleUrls: ['./financial-summary.component.scss']
})
export class FinancialSummaryComponent implements OnInit {
  accountSummary: any;
  recentTransactions: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getAccountSummary().subscribe(
      summary => this.accountSummary = summary
    );

    this.homeService.getRecentTransactions().subscribe(
      transactions => this.recentTransactions = transactions
    );
  }
}