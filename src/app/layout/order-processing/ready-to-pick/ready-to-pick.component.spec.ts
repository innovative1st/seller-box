import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToPickComponent } from './ready-to-pick.component';

describe('ReadyToPickComponent', () => {
  let component: ReadyToPickComponent;
  let fixture: ComponentFixture<ReadyToPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyToPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyToPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
