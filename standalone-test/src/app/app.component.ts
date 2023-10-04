import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'standalone-test';

  constructor(
    private authService: AuthService
  ) {
    authService.myVar = {name: 'Object set in app component'};
  }

}
