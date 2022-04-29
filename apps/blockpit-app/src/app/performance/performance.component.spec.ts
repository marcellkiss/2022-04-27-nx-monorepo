import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PerformanceComponent } from './performance.component';
import { TableComponent } from './table.component';
import { TransactionService } from './transaction.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformanceComponent, TableComponent],
      imports: [],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        {
          provide: TransactionService,
          useValue: {
            getTransactions() {
              return of([]);
            },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PerformanceComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

    // expect(app).toBeTruthy();
  });
});
