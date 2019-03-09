import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualInventoryComponent } from './virtual-inventory.component';

describe('VirtualInventoryComponent', () => {
  let component: VirtualInventoryComponent;
  let fixture: ComponentFixture<VirtualInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
