import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'blockpit-nx-example-table',
  templateUrl: './table.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // styleUrls: ['./name.component.scss']
})
export class TableComponent implements OnInit {
  @Input() user!: User;
  @Input() transactions!: Transaction[];

  public formattedAmounts: { [key: string]: string } = {};

  public insiderUser: User = {
    id: '1',
    name: 'Georg',
    birthday: new Date().toISOString(),
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.insiderUser = { ...this.insiderUser, name: 'Lisa' };
      // this.insiderUser.name = 'Lisa';
    }, 1000);

    // INIT
    this.transactions.forEach((transaction) => {
      this.formattedAmounts[transaction.id] = this.formatAmount(
        transaction.amount
      );
    });
  }

  public onUpdate(): string {
    console.log('[TableComponent::onUpdate]');

    return 'result of onUpdate';
  }

  private formatAmount(amount: number) {
    console.log('HELLO, we are formatting');
    return amount + '£';
  }
}

export interface Transaction {
  id: string;
  amount: number;
  type: string;
}

export interface User {
  id: string;
  name: string;
  birthday: string;
}
