import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './table.component';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('somepage/transactions');
    // this.http.get(....)
    // return [
    //   {
    //     id: '1',
    //     amount: 123,
    //     type: 'typeA',
    //   },
    //   {
    //     id: '2',
    //     amount: 222,
    //     type: 'typeB',
    //   },
    //   {
    //     id: '3',
    //     amount: 333,
    //     type: 'typeC',
    //   },
    // ];
  }
}
