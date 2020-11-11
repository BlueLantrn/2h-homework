import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  ticket$: Observable<Ticket>
  completedValues = [true,false];
  users$: Observable<User[]>
  ticketId: number;
  completed: boolean;
  selectedAssignee: number;
  errorMessage: string;

  constructor(private _activatedRoute: ActivatedRoute, private readonly backendService: BackendService,private _router: Router) {
    this.ticket$ = this._activatedRoute.paramMap
            .pipe(
                map(paramMap => paramMap.get('ticketId')),
                tap(ticketId => this.ticketId = Number(ticketId)),
                switchMap(ticketId => this.backendService.ticket(Number(ticketId)))
            );
   }

  ngOnInit(): void {
    this.users$ = this.backendService.users();
  }

  changeCompletedValue(value: boolean){
    this.completed = value;
  }

  changeAssignee(value: number){
    this.selectedAssignee = value;
  }

  editTicket(){
    if(this.completed){
      this.backendService.complete(this.ticketId,this.completed).subscribe({
        error: (err: any) =>{
          this.errorMessage = err;
        }
      });
    }
    if(this.selectedAssignee){
      this.backendService.assign(this.ticketId,this.selectedAssignee).subscribe({
        error: (err: any) =>{
          this.errorMessage = err;
        }
      });
    }
    if(!this.errorMessage){
      this._router.navigate(['tickets']);
    }
      
  }
}
