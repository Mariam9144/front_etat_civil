import { Component } from '@angular/core';
import { AutoLogoutService } from './services/auto-logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site synefct';

  constructor(private autoLogoutService: AutoLogoutService,
    ) { }
}
