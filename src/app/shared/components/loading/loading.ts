import { Component } from '@angular/core';
import { LoadingService } from '../../../Services/core/loading-service';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class Loading {
  constructor(public loadingService: LoadingService) { }

}
