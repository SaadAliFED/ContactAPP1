import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loading } from './shared/components/loading/loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loading],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ContactAPP1');
  selectedType = signal<string>('mock');

  onTypeSelected($event: any) {
    this.selectedType.set($event);
  }
}
