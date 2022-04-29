import { Component, OnInit } from '@angular/core';
import { Transaction, User } from './table.component';

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

  public transcations: Transaction[] = [
    {
      id: '1',
      amount: 123,
      type: 'typeA',
    },
    {
      id: '2',
      amount: 222,
      type: 'typeB',
    },
    {
      id: '3',
      amount: 333,
      type: 'typeC',
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.user = { ...this.user, name: 'Jörg' };
    }, 2000);
  }
}
