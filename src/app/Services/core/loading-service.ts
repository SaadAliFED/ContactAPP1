import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private activeRequests = 0;

  private loadingSignal = signal(false);

  loading = this.loadingSignal.asReadonly();

  show(): void {
    this.activeRequests++;

    this.loadingSignal.set(true);
  }

  hide(): void {
    this.activeRequests--;

    if (this.activeRequests <= 0) {
      this.activeRequests = 0;
      this.loadingSignal.set(false);
    }
  }
}
