import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { TransactionService } from './transaction.service';

describe(`TransactionService`, () => {
  let service: TransactionService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionService],
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(TransactionService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('.getTransactions()', async () => {
    jest.spyOn(httpClient, 'get').mockReturnValue(of([]));

    const results = await firstValueFrom(service.getTransactions());
    expect(results).toBeTruthy();
    expect(results.length === 0).toBe(true);
  });
});
