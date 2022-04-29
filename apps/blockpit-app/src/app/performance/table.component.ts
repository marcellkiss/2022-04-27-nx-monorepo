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
  }

  onUpdate(): string {
    console.log('[TableComponent::onUpdate]');

    return 'result of onUpdate';
  }
}

export interface User {
  id: string;
  name: string;
  birthday: string;
}
