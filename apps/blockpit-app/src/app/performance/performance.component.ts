import { Component, OnInit } from '@angular/core';
import { Transaction, User } from './table.component';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'blockpit-nx-example-performance',
  // template: `<blockpit-nx-example-table></blockpit-nx-example-table>`,
  templateUrl: 'performance.component.html',
  styles: [``],
})
export class PerformanceComponent implements OnInit {
  public user: User = {
    id: '1',
    name: 'Georg',
    birthday: new Date().toISOString(),
  };

  public transactions!: Transaction[];

  constructor(private transactionService: TransactionService) {
    this.transactionService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.user = { ...this.user, name: 'Jörg' };
    }, 2000);
  }
}
