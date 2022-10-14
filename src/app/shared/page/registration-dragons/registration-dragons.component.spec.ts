import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDragonsComponent } from './registration-dragons.component';

describe('RegistrationDragonsComponent', () => {
  let component: RegistrationDragonsComponent;
  let fixture: ComponentFixture<RegistrationDragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDragonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
