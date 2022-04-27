import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

// @UntilDestroy()
@Component({
  selector: 'blockpit-nx-example-unsubscribe',
  template: ``,
  styles: [``],
})
export class UnsubscribeComponent implements OnDestroy {
  private destroy$ = new Subject();
  private sampleObservable = new BehaviorSubject<any>(null);

  title = 'blockpit-app';

  constructor() {
    // Manual example
    this.sampleObservable
      .pipe(takeUntil(this.destroy$))
      // pipe(untilDestroyed(this))
      .subscribe((newValue) => {
        console.log(newValue);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }
}
