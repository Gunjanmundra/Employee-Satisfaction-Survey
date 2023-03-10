import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHappinessIndexComponent } from './employee-happiness-index.component';

describe('EmployeeHappinessIndexComponent', () => {
  let component: EmployeeHappinessIndexComponent;
  let fixture: ComponentFixture<EmployeeHappinessIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHappinessIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeHappinessIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
