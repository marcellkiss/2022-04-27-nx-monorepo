import { Component, OnInit } from '@angular/core';
import { User } from './table.component';

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

  ngOnInit(): void {
    setTimeout(() => {
      this.user = { ...this.user, name: 'Jörg' };
    }, 2000);
  }
}
