import { Component } from '@angular/core';
import { MfeDemoComponent } from './mfe/mfe-demo/mfe-demo.component';

@Component({
  selector: 'app-root',
  imports: [MfeDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-elements';
}
