import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Ticket } from 'src/interfaces/ticket.interface';
import { AddTicketComponent } from '../add-ticket/add-ticket.component';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();

  displayedTickets$: Observable<Ticket[]>;
  errorMessage: string;

  constructor(private readonly backendService: BackendService, private _router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayedTickets$ = this.tickets$;
  }

  navigateToDetails(ticketId: number){
    this._router.navigate(['/details', ticketId])
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTicketComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.backendService.newTicket({description: result}).subscribe({
        error: (err: any) =>{
          this.errorMessage = err;
        }
      });
    });
  }

  filterTickets(value: string){   
    this.displayedTickets$ = this.tickets$.pipe(
      map(tickets => tickets.filter(ticket => ticket.description.includes(value) || String(ticket.id).includes(value)))
    )
  }
}
