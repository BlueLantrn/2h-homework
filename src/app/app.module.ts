import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatListModule} from '@angular/material/list';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [AppComponent, TicketListComponent, TicketDetailsComponent, AddTicketComponent],
    imports: [BrowserModule, BrowserAnimationsModule,AppRoutingModule,MatListModule,MatButtonModule,MatIconModule,MatProgressSpinnerModule,MatDialogModule,MatFormFieldModule,MatInputModule,FormsModule,MatSelectModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
