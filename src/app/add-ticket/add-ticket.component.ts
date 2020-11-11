import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  description: string;

  constructor(public dialogRef: MatDialogRef<AddTicketComponent>) { }

  ngOnInit(): void {
  }

  cancel(): void {  
    this.dialogRef.close();
  }

  addTicket(){   
    this.dialogRef.close(this.description)
  }
}
