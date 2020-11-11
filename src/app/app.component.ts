import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Ticket } from '../interfaces/ticket.interface';
import { User } from '../interfaces/user.interface';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}
}
