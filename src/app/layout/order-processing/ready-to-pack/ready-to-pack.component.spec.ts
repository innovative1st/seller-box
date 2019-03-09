import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToPackComponent } from './ready-to-pack.component';

describe('ReadyToPackComponent', () => {
  let component: ReadyToPackComponent;
  let fixture: ComponentFixture<ReadyToPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyToPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyToPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
