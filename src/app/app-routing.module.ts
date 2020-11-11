import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';


const routes: Routes = [{
    path: 'tickets',
    component: TicketListComponent
},{
    path: 'details/:ticketId',
    component: TicketDetailsComponent
},
{
    path: '**',
    redirectTo: '/tickets'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
