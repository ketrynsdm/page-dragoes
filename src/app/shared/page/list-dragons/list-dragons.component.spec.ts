import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDragonsComponent } from './list-dragons.component';

describe('ListDragonsComponent', () => {
  let component: ListDragonsComponent;
  let fixture: ComponentFixture<ListDragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDragonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
