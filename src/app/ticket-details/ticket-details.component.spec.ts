import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { BackendService } from '../backend.service';
import {RouterTestingModule} from "@angular/router/testing";

import { TicketDetailsComponent } from './ticket-details.component';

describe('TicketDetailsComponent', () => {
  let component: TicketDetailsComponent;
  let fixture: ComponentFixture<TicketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ TicketDetailsComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          paramMap: of(convertToParamMap({ticketId: 1}))
        }
      }, BackendService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change completed value', () =>{
    expect(component.completed).toBeUndefined();
    component.changeCompletedValue(true);
    expect(component.completed).toBeTruthy();
    component.changeCompletedValue(false);
    expect(component.completed).toBeFalsy();
  })

  it('should change assignee value', () =>{
    expect(component.selectedAssignee).toBeUndefined();
    component.changeAssignee(1);
    expect(component.selectedAssignee).toBe(1);
  })

  it('should not edit ticket', () => {
    component.ticketId = 1
    component.selectedAssignee = 1
    component.editTicket();
    console.log(component.errorMessage);
    expect(component.errorMessage).toBeTruthy();
  })
});
