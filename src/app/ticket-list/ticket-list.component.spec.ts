import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import {RouterTestingModule} from "@angular/router/testing";
import { BackendService } from '../backend.service';
import { TicketListComponent } from './ticket-list.component';

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
      declarations: [ TicketListComponent ],
      providers: [BackendService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filter tickets', () => {
    component.filterTickets('arm');
    component.displayedTickets$.subscribe(res => {
      expect(res.length).toBe(1)
    })
    component.filterTickets('aaaaaaaa');
    component.displayedTickets$.subscribe(res => {
      expect(res.length).toBe(0)
    })
  })
});
